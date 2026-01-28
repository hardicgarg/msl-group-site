import React from 'react';
import { motion } from 'framer-motion';

const BackgroundShapes = () => {
    return (
        <div className="background-shapes-container">
            {/* Orb 1: Primary Blue - Top Left */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{ duration: 20, repeat: Infinity, active: "linear" }}
                className="abstract-shape shape-1"
            />

            {/* Orb 2: Accent Cyan - Center Right */}
            <motion.div
                animate={{
                    x: [0, -70, 0],
                    y: [0, 100, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, active: "linear" }}
                className="abstract-shape shape-2"
            />

            {/* Orb 3: Deep Slate - Bottom Left */}
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, -50, 0],
                }}
                transition={{ duration: 18, repeat: Infinity, active: "linear" }}
                className="abstract-shape shape-3"
            />
        </div>
    );
};

export default BackgroundShapes;
