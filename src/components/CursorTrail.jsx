import React, { useState, useEffect, useRef } from 'react';

const CursorTrail = () => {
    const [bubbles, setBubbles] = useState([]);
    const requestRef = useRef();

    useEffect(() => {
        let lastBubbleTime = 0;

        const handleMouseMove = (e) => {
            const now = Date.now();
            // Throttle bubble generation to create max ~30-40 bubbles simultaneously
            // Generating one every ~20ms means about 50 bubbles per second
            if (now - lastBubbleTime > 20) {
                lastBubbleTime = now;

                // Random drift values
                const dx = (Math.random() - 0.5) * 40; // outward X
                // upward Y drift - mostly negative, some outward
                const dy = (Math.random() - 0.8) * 40;

                const newBubble = {
                    id: now,
                    x: e.clientX,
                    y: e.clientY,
                    size: (Math.random() * 4 + 4) * 1.5, // 6px to 12px
                    // Mix of warm orange (#f97316) and soft white (#ffffff)
                    color: Math.random() > 0.5 ? 'rgba(249, 115, 22, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                    glowColor: Math.random() > 0.5 ? 'rgba(249, 115, 22, 0.4)' : 'rgba(255, 255, 255, 0.4)',
                    dx: `${dx}px`,
                    dy: `${dy}px`,
                };

                // Keep max 40 active bubbles on screen to ensure performance
                setBubbles((prev) => [...prev.slice(-39), newBubble]);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const removeOldBubbles = () => {
            const now = Date.now();
            // Bubbles live longer (we use 1800ms base)
            setBubbles(prev => {
                const filtered = prev.filter(b => now - b.id < 1800);
                // Return same reference if no changes to prevent unnecessary renders
                return filtered.length === prev.length ? prev : filtered;
            });
            requestRef.current = requestAnimationFrame(removeOldBubbles);
        };
        requestRef.current = requestAnimationFrame(removeOldBubbles);

        return () => cancelAnimationFrame(requestRef.current);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] overflow-hidden">
            {bubbles.map(bubble => (
                <div
                    key={bubble.id}
                    className="absolute rounded-full"
                    style={{
                        left: bubble.x,
                        top: bubble.y,
                        width: `${bubble.size}px`,
                        height: `${bubble.size}px`,
                        backgroundColor: bubble.color,
                        boxShadow: `0 0 ${bubble.size + 4}px ${bubble.glowColor}`,
                        '--dx': bubble.dx,
                        '--dy': bubble.dy,
                        animation: `cursor-bubble-float 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`, // smooth outward easing
                    }}
                />
            ))}
            <style>{`
                @keyframes cursor-bubble-float {
                    0% {
                        opacity: 1;
                        transform: translate(-50%, -50%) scale(1);
                    }
                    100% {
                        opacity: 0;
                        transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(0.3);
                    }
                }
            `}</style>
        </div>
    );
};

export default CursorTrail;
