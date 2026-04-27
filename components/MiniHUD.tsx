"use client";
import { motion } from "motion/react";

export default function MiniHUD() {
    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }} // Smoothly slides out to the left
            transition={{ duration: 0.5, ease: "circOut" }}
            className="fixed top-8 left-8 z-40 flex items-start gap-4"
        >
            {/* Character Portrait Placeholder */}
            <div className="w-12 h-12 border border-primary/40 bg-surface-container-low flex items-center justify-center relative">
                <div className="absolute inset-0 bg-primary/5 animate-pulse" />
                <span className="text-primary text-[10px] font-mono">LVL.1</span>
            </div>

            <div className="flex flex-col gap-1">
                <div className="flex flex-col">
                    <h1 className="font-display text-xl text-on-surface uppercase tracking-tight leading-none">
                        Said Kemal Timucin
                    </h1>
                    <p className="font-mono text-[9px] text-primary uppercase tracking-[0.2em]">
                        [ The Unemployed Architect ]
                    </p>
                </div>

                {/* Vitality Bars */}
                <div className="flex flex-col gap-1 mt-1">
                    <HUDBar color="bg-primary" width="w-24" />
                    <HUDBar color="bg-secondary" width="w-16" />
                </div>
            </div>
        </motion.div>
    );
}

function HUDBar({ color, width }: { color: string, width: string }) {
    return (
        <div className={`h-[3px] bg-surface-container-highest ${width} overflow-hidden relative`}>
            <div className={`absolute inset-y-0 left-0 ${color} w-full shadow-[0_0_5px_currentColor] opacity-80`} />
        </div>
    );
}