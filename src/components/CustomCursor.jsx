import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smoother spring for larger object
    const springConfig = { damping: 30, stiffness: 400 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <motion.div

                className={`custom-cursor ${isHovered ? 'hovered' : ''}`}
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    scale: isHovered ? 1.5 : 1, // Keep scale animation
                }}
            />
            {/* Tiny center dot for precision */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '4px',
                    background: 'white',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 10000,
                    transform: 'translate(-50%, -50%)',
                }}
                ref={(ref) => {
                    if (ref) {
                        const moveDot = (e) => {
                            ref.style.left = e.clientX + 'px';
                            ref.style.top = e.clientY + 'px';
                        };
                        window.addEventListener('mousemove', moveDot);
                    }
                }}
            />
        </>
    );
};

export default CustomCursor;
