"use client";

import {useState} from "react";
import {motion, AnimatePresence} from "motion/react";

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

            {/* THE LOADING SEQUENCE */}
            <AnimatePresence mode="wait">
                {isLoading && (
                    <LoadingScreen key="loader" onComplete={() => setIsLoading(false)}/>
                )}
            </AnimatePresence>

            {/* THE WORLD (Everything inside shows only after loading) */}
            {!isLoading && (
                <>
                    {/* GLOBAL HUD OVERLAY (Scanlines) */}
                    <div className="scanline absolute inset-0 z-50 pointer-events-none opacity-10"/>

                    {/* SYSTEM TOGGLE */}
                    {/* Currently unused. Could be useful for theme toggle */}
                    <ThemeToggle/>

                    {/* DYNAMIC PLAYER HUD */}
                    {/* This only appears when NOT looking at the full Status Window */}
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
                        {/* @TODO Image must be changed later */}
                        <div
                            className="absolute inset-0 bg-cover bg-center grayscale-[20%] brightness-[0.3] scale-105"
                            style={{backgroundImage: "url('/mainpage_background.jpg')"}}
                        />
                        {/* Dark vignette to keep the UI readable */}
                        <div
                            className="absolute inset-0 bg-gradient-to-b from-[#080f10]/80 via-transparent to-[#080f10]"/>
                    </motion.div>

                    {/* @TODO Find a better looking arm */}
                    {/*
                    FIRST-PERSON PLAYER ARM
                    <motion.div
                        initial={{y: 500, rotate: 15}}
                        animate={{
                            rotate: 0,
                            x: [0, 8, 0],
                            y: [0, -8, 0]
                        }}
                        transition={{
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
                    </motion.div>*/}

                    {/* MAIN WINDOW STAGE */}
                    <div className="z-20 w-full h-[80vh] relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}

                                initial={
                                    activeTab === "status" ? { x: "-110%", opacity: 0 } :
                                        activeTab === "inventory" ? { x: "110%", opacity: 0 } :
                                            activeTab === "skills" ? { y: "-120%", x: "-50%", opacity: 0 } : // Drop from top
                                                { opacity: 0, scale: 0.9, y: 20 }
                                }

                                animate={
                                    activeTab === "status" ? { x: 0, opacity: 1 } :
                                        activeTab === "inventory" ? { x: 0, opacity: 1 } :
                                            activeTab === "skills" ? { y: "-50%", x: "-50%", opacity: 1 } : // Center vertically/horizontally
                                                { opacity: 1, scale: 1, y: 0, x: "-50%" }
                                }

                                exit={
                                    activeTab === "status" ? { x: "-110%", opacity: 0 } :
                                        activeTab === "inventory" ? { x: "110%", opacity: 0 } :
                                            activeTab === "skills" ? { y: "-120%", x: "-50%", opacity: 0 } : // Fly back to top
                                                { opacity: 0, scale: 1.1, y: -20, x: "-50%" }
                                }
                                transition={{
                                    type: "spring",
                                    stiffness: 45, // Slightly lower stiffness for a "heavy" drop feel
                                    damping: 15,
                                    mass: 1.2
                                }}

                                className={`absolute ${
                                    activeTab === "status" ? "left-10 top-0 w-full md:w-[25vw] h-full" :
                                        activeTab === "inventory" ? "right-10 top-0 w-full md:w-[25vw] h-full" :
                                            "left-1/2 top-1/2 w-full max-w-4xl" // Centered for Skills
                                }`}
                            >
                                {activeTab === "status" && <StatusWindow />}
                                {activeTab === "inventory" && <InventoryGrid />}

                                {/* --- Skills Section --- */}
                                {activeTab === "skills" && (
                                    <div className="w-full h-full flex justify-center items-center">
                                        <SkillTree />
                                    </div>
                                )}

                                {/* --- Lore / Encrypted Section --- */}
                                {activeTab === "lore" && (
                                    <div className="w-full h-full flex justify-center items-center">
                                        <div className="bg-surface-container/60 p-12 border border-primary/20 backdrop-blur-md">
                        <span className="font-mono text-hud-micro text-primary animate-pulse uppercase">
                            [ Access Denied: Insufficient Clearance ]
                        </span>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* HUD NAVIGATION DOCK */}
                    <HUDNavigation activeTab={activeTab} onTabChange={setActiveTab}/>
                </>
            )}
        </main>
    );
}