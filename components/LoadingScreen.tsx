"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

// Boot messages
const BOOT_LOGS = [
    "[ OK ] INITIALIZING CORE_SYSTEM_V.1.0.4",
    "[ OK ] LOADING DATABASE...",
    "[ OK ] SYNCHRONIZING ASSETS",
    "[ OK ] BOOTING INTERFACE",
    "[ OK ] SYSTEM READY.",
    "[ OK ] ..."
];

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

// Helper to generate a random integer between min and max
const rand = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min);

interface LoadingScreenProps {
    onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
    const [progress, setProgress] = useState(0);
    const [logIndex, setLogIndex] = useState(0);

    useEffect(() => {
        const updateProgress = async () => {
            // Phase 1: Initial surge to 15-44%
            await wait(rand(300, 700));
            setProgress(rand(15, 44));
            setLogIndex(1);

            // Phase 2: The "System Struggle" (Wait, then jump to 60-80%)
            await wait(rand(1000, 1800));
            setProgress(rand(60, 80));
            setLogIndex(2);

            // Phase 3: Final data synchronization
            await wait(rand(500, 1000));
            setLogIndex(3);
            setProgress(100);

            // Phase 4: System Stability Check
            await wait(700);
            setLogIndex(4);
            await wait(500);

            // Continue
            onComplete();
        };

        updateProgress();
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(20px)" }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080f10] font-mono p-6"
        >
            {/* 1px Scanline overlay to simulate a holographic CRT display */}
            <div className="absolute inset-0 pointer-events-none z-10 opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%]"></div>

            <div className="w-full max-w-sm space-y-8 relative z-20">
                {/* HOLOGRAPHIC LOGO - Currently only a placeholder */}
                <motion.div
                    animate={{
                        opacity: [0.4, 1, 0.4],
                        boxShadow: [
                            "0 0 0px rgba(0, 219, 233, 0)",
                            "0 0 20px rgba(0, 219, 233, 0.4)",
                            "0 0 0px rgba(0, 219, 233, 0)",
                        ],
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-12 h-12 border border-[#00dbe9] mx-auto flex items-center justify-center bg-[#dbfcff]/5"
                >
                    <div className="w-6 h-0.5 bg-[#00dbe9] shadow-[0_0_10px_#00dbe9]"></div>
                </motion.div>

                {/* SYSTEM LOG DISPLAY */}
                <div className="h-24 overflow-hidden px-2 space-y-1">
                    <AnimatePresence mode="popLayout">
                        {BOOT_LOGS.slice(0, logIndex + 1).map((log, i) => (
                            <motion.p
                                key={log}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-hud-micro text-[#00dbe9]/70 leading-relaxed uppercase tracking-[0.15em] font-mono"
                            >
                                {log}
                            </motion.p>
                        ))}
                    </AnimatePresence>
                </div>

                {/* PROGRESS MODULE */}
                <div className="space-y-3">
                    <div className="flex justify-between font-mono text-hud-micro text-[#849495] uppercase tracking-[0.2em]">
                        <span>Initialising_HUD</span>
                        <span className="text-[#00dbe9]">{Math.round(progress)}%</span>
                    </div>

                    <div className="w-full h-[2px] bg-[#1a2122] overflow-hidden relative">
                        <motion.div
                            initial={{ width: "0%" }} // Set the starting width. Without this it starts from 100% then jumps back to where it should be.
                            animate={{ width: `${progress}%` }}
                            transition={{ type: "spring", stiffness: 40, damping: 15 }}
                            className="h-full bg-[#00dbe9] shadow-[0_0_15px_#00dbe9]"
                        />
                    </div>
                </div>

                {/* FOOTER LABEL */}
                <p className="text-center text-hud-nano text-[#3b494b] uppercase tracking-[0.3em] animate-pulse">
                    Awaiting Neural Synchronization
                </p>
            </div>
        </motion.div>
    );
}