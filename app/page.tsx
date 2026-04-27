"use client";

import {useState} from "react";
import {motion, AnimatePresence} from "motion/react";

// Component Imports
import LoadingScreen from "@/components/LoadingScreen";
import MiniHUD from "@/components/MiniHUD";
import InventoryGrid from "@/components/InventoryGrid";
import SkillTree from "@/components/SkillTree";
import StatusWindow from "@/components/StatusWindow";
import ThemeToggle from "@/components/ThemeToggle";
import HUDNavigation from "@/components/HUDNavigation";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("status");

    return (
        <main
            className="relative min-h-screen w-full flex items-center justify-center p-0 bg-[#050505] overflow-hidden">

            {/* 1. THE LOADING SEQUENCE */}
            <AnimatePresence mode="wait">
                {isLoading && (
                    <LoadingScreen key="loader" onComplete={() => setIsLoading(false)}/>
                )}
            </AnimatePresence>

            {/* 2. THE WORLD (Everything inside shows only after loading) */}
            {!isLoading && (
                <>
                    {/* GLOBAL HUD OVERLAY (Scanlines) */}
                    <div className="scanline absolute inset-0 z-50 pointer-events-none opacity-10"/>

                    {/* SYSTEM TOGGLE (Top Right) */}
                    <ThemeToggle/>

                    {/* DYNAMIC PLAYER HUD (Top Left)
              This only appears when NOT looking at the full Status Window */}
                    <AnimatePresence>
                        {activeTab !== "status" && (
                            <MiniHUD key="mini-hud"/>
                        )}
                    </AnimatePresence>

                    {/* BACKGROUND IMAGE LAYER */}
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 2, ease: "easeOut"}}
                        className="absolute inset-0 z-0"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center grayscale-[20%] brightness-[0.3] scale-105"
                            style={{backgroundImage: "url('/mainpage_background.jpg')"}}
                        />
                        {/* Dark vignette to keep the UI readable */}
                        <div
                            className="absolute inset-0 bg-gradient-to-b from-[#080f10]/80 via-transparent to-[#080f10]"/>
                    </motion.div>

                    {/* FIRST-PERSON PLAYER ARM (Bottom Right) */}
                    <motion.div
                        initial={{y: 500, rotate: 15}}
                        animate={{
                            y: 0,
                            rotate: 0,
                            x: [0, 8, 0],
                            y: [0, -8, 0]
                        }}
                        transition={{
                            y: {duration: 1.2, ease: "circOut"},
                            rotate: {duration: 1.2, ease: "circOut"},
                            x: {repeat: Infinity, duration: 5, ease: "easeInOut"},
                            y: {repeat: Infinity, duration: 4, ease: "easeInOut"}
                        }}
                        className="fixed bottom-0 right-0 z-30 pointer-events-none select-none w-[400px] md:w-[600px]"
                    >
                        <img
                            src="/player_arm.png"
                            alt="Player Arm"
                            className="w-full h-auto drop-shadow-[0_0_50px_rgba(0,0,0,0.9)]"
                        />
                    </motion.div>

                    {/* MAIN WINDOW STAGE */}
                    <div className="z-20 w-full h-[75vh] relative mt-[-5vh]">
                        {/* mt-[-5vh] helps center the whole stage vertically if needed */}

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={activeTab === "status"
                                    ? { x: "-110%", opacity: 0 }
                                    : { opacity: 0, scale: 0.9, y: 20 }
                                }
                                animate={activeTab === "status"
                                    ? { x: 0, opacity: 1 }
                                    : { opacity: 1, scale: 1, y: 0, x: "-50%" } // Centering logic for others
                                }
                                exit={activeTab === "status"
                                    ? { x: "-110%", opacity: 0 }
                                    : { opacity: 0, scale: 1.1, y: -20, x: "-50%" }
                                }
                                transition={{
                                    type: "spring",
                                    stiffness: 50,
                                    damping: 18,
                                    mass: 1.2
                                }}
                                // Here is the magic: Status stays left, Others stay centered
                                className={`absolute top-0 ${
                                    activeTab === "status"
                                        ? "left-10 w-full md:w-[25vw] h-full"
                                        : "left-1/2 w-full max-w-4xl h-full"
                                }`}
                            >
                                {activeTab === "status" && <StatusWindow />}

                                {/* Content for Inventory/Skills */}
                                {activeTab !== "status" && (
                                    <div className="w-full h-full flex justify-center items-center">
                                        {activeTab === "inventory" && <InventoryGrid />}
                                        {activeTab === "skills" && <SkillTree />}
                                        {activeTab === "lore" && (
                                            <div className="bg-surface-container/60 p-12 border border-primary/20 backdrop-blur-md">
                                                <span className="font-mono text-primary animate-pulse uppercase">[ Access Denied ]</span>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* HUD NAVIGATION DOCK (Fixed Bottom) */}
                    <HUDNavigation activeTab={activeTab} onTabChange={setActiveTab}/>
                </>
            )}
        </main>
    );
}