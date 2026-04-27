"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import LoadingScreen from "@/components/LoadingScreen";
import MiniHUD from "@/components/MiniHUD";
import InventoryGrid from "@/components/InventoryGrid";
import ThemeToggle from "@/components/ThemeToggle";
import HUDNavigation from "@/components/HUDNavigation";
import StatusWindow from "@/components/StatusWindow";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("status");

    return (
        <main className="relative min-h-screen w-full flex items-center justify-center p-6 bg-black">
            <AnimatePresence mode="wait">
                {isLoading && <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />}
            </AnimatePresence>

            {!isLoading && (
                <>
                    <div className="scanline absolute inset-0 z-50 pointer-events-none opacity-10" />
                    <ThemeToggle />
                    <MiniHUD />

                    {/* Background Reveal */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-cover bg-center grayscale-[30%] brightness-[0.3]" style={{ backgroundImage: "url('/mainpage_background.jpg')" }} />
                        <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-transparent to-surface" />
                    </motion.div>

                    {/* First-Person Arm */}
                    <motion.div
                        initial={{ y: 400 }} animate={{ y: 0, x: [0, 5, 0], y: [0, -5, 0] }}
                        transition={{ y: { duration: 1 }, x: { repeat: Infinity, duration: 4, ease: "easeInOut" } }}
                        className="fixed bottom-0 right-0 z-30 pointer-events-none w-[500px]"
                    >
                        <img src="/player_arm.png" alt="Arm" className="w-full h-auto" />
                    </motion.div>

                    {/* Active Window */}
                    <div className="z-20 w-full flex justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                                className="w-full flex justify-center"
                            >
                                {activeTab === "status" && <StatusWindow />}
                                {activeTab === "inventory" && <InventoryGrid />}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <HUDNavigation activeTab={activeTab} onTabChange={setActiveTab} />
                </>
            )}
        </main>
    );
}