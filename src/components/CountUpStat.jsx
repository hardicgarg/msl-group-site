import React, { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const CountUpStat = ({ value, suffix = "", label, color = "text-blue-600" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    // Spring animation for smooth counting
    const springValue = useSpring(0, {
        duration: 2000,
        bounce: 0,
        stiffness: 50,
        damping: 15
    });

    const displayValue = useTransform(springValue, (current) => Math.floor(current));

    useEffect(() => {
        if (isInView) {
            let numericValue = typeof value === 'string' ? parseFloat(value.replace(/,/g, '')) : value;
            if (isNaN(numericValue)) numericValue = 0;
            springValue.set(numericValue);
        }
    }, [isInView, value, springValue]);

    return (
        <div ref={ref} className="flex flex-col items-start min-w-[120px]">
            <div
                className={`flex items-baseline tracking-tighter ${color} mb-2`}
                style={{ fontSize: '5rem', fontWeight: 900, lineHeight: 1 }}
            >
                <motion.span>{displayValue}</motion.span>
                <span>{suffix}</span>
            </div>
            <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                {label}
            </div>
        </div>
    );
};

export default CountUpStat;
