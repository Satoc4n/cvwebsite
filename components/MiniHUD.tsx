"use client";
import { motion } from "motion/react";

export default function MiniHUD() {
    return (
        <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="fixed top-8 left-8 z-40 flex items-center gap-4">
            <div className="w-10 h-10 border border-primary/30 bg-surface-container flex items-center justify-center text-primary text-[10px] font-mono">LV.1</div>
            <div className="space-y-1">
                <h2 className="font-display text-lg tracking-tight uppercase leading-none">Your Name</h2>
                <div className="h-[2px] w-24 bg-surface-container-highest relative">
                    <div className="absolute inset-y-0 left-0 bg-primary w-[70%] shadow-[0_0_8px_#00dbe9]" />
                </div>
            </div>
        </motion.div>
    );
}