"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import StatusWindow from "@/components/StatusWindow";
import LoadingScreen from "@/components/LoadingScreen";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <main className="relative min-h-screen w-full flex flex-col items-center justify-center p-6 overflow-hidden bg-[#050505]">
            {/* 1. Global Scanline Effect (Highest Layer) */}
            <div className="scanline absolute inset-0 pointer-events-none z-50 opacity-10"></div>

            {/* 2. Theme/Power Toggle */}
            <ThemeToggle />

            {/* 3. The Loading System */}
            <AnimatePresence mode="wait">
                {isLoading && (
                    <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
                )}
            </AnimatePresence>

            {/* 4. The World (Visible after loading) */}
            {!isLoading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                >
                    {/* THE BACKGROUND IMAGE */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale-[20%] brightness-[0.4]"
                        style={{ backgroundImage: "url('/mainpage_background.jpg')" }}
                    />

                    {/* SYSTEM OVERLAYS: To maintain the HUD aesthetic */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#080f10]/80 via-transparent to-[#080f10]" />
                    <div className="absolute inset-0 opacity-[0.05] bg-[size:30px_30px] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]" />
                </motion.div>
            )}

            {/* 5. HUD ELEMENTS */}
            {!isLoading && (
                <div className="z-10 w-full flex flex-col items-center gap-12">
                    <StatusWindow />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 0.4, y: [0, 10, 0] }}
                        transition={{
                            opacity: { delay: 1, duration: 1 },
                            y: { repeat: Infinity, duration: 2 }
                        }}
                        className="flex flex-col items-center gap-2"
                    >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#00dbe9]">
              Scroll to view Quests
            </span>
                        <div className="w-[1px] h-12 bg-gradient-to-b from-[#00dbe9] to-transparent"></div>
                    </motion.div>
                </div>
            )}
        </main>
    );
}