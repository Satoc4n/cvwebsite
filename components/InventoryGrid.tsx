"use client";
import { motion } from "motion/react";
import InventoryCard from "./InventoryCard";
import { Code2, GitBranch, ExternalLink, Package } from "lucide-react";

// @TODO Finish

const PROJECTS = [
    {
        id: 1,
        name: "This website",
        platform: "github",
        grade: "Legendary",
        desc: "My latest Magnum Opus.",
        lang: "TypeScript",
        url: "https://github.com/Satoc4n/cvwebsite/tree/master"
    },
    {
        id: 2,
        name: "Cure-On",
        platform: "gitlab",
        grade: "Legendary",
        desc: "An app for elderly and their caretakers to easily manage medication and water intake. Done with a group.",
        lang: "Kotlin",
        url: "https://github.com/Satoc4n/Cure-On/tree/main"
    },
    {
        id: 3,
        name: "Triage App Frontend-Website",
        platform: "github",
        grade: "Legendary",
        desc: "An app to manage the triage process of hospitals. My task is to develop the frontend-website. Currently in development.",
        lang: "React",
        url: "https://github.com/Satoc4n/userinterface-react"
    },
    {
        id: 4,
        name: "Multimodale Signalverarbeitung (MMS)",
        platform: "github",
        grade: "Rare",
        desc: "A lightweight C toolkit for signal generation, statistical analysis, and basic digital signal processing (DFT, filtering).",
        lang: "C",
        url: "https://github.com/Satoc4n/MMS25-26"
    },
    {
        id: 5,
        name: "Numbers_Average",
        platform: "github",
        grade: "Common",
        desc: "One of the first things I've coded. It's nothing much to look at but I am still proud of it.",
        lang: "Java",
        url: "https://github.com/Satoc4n/numbers-average"
    },
    {
        id: 6,
        name: "Shell For Loop",
        platform: "github",
        grade: "Common",
        desc: "A very basic tool that was written for school. Generates simulated sensor data, saves it as JSON, and uploads it to a server via HTTP POST.",
        lang: "Bash",
        url: "https://github.com/Satoc4n/KSYSBetriebScript"
    }
];

export default function InventoryGrid() {
    return (
        <div className="h-[85vh] w-full bg-[#1a2122]/90 backdrop-blur-2xl border border-[#00dbe9]/30 flex flex-col relative shadow-[-20px_0_60px_rgba(0,0,0,0.8)]">

            <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-primary to-transparent opacity-50" />

            <div className="p-8 flex-1 flex flex-col justify-between overflow-y-auto custom-scrollbar">
                <div className="space-y-10">
                    <header className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-6 bg-secondary" />
                            <h2 className="font-display text-hud-title uppercase tracking-tighter text-white leading-none">Inventory</h2>
                        </div>
                        <div className="font-mono text-hud-nano text-secondary/60 tracking-[.4em] uppercase">
                            Repository_Archive
                        </div>
                    </header>

                    <section className="space-y-4">
                        <h3 className="font-mono text-hud-micro text-outline uppercase tracking-widest border-b border-white/5 pb-2">Active_Artifacts</h3>

                        <div className="space-y-3">
                            {PROJECTS.map((project) => (
                                <div key={project.id} className="group border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-primary/40 hover:bg-primary/[0.03] relative overflow-hidden">

                                    <div className="absolute top-0 right-0 px-3 py-1 bg-white/5 border-l border-b border-white/10 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all">
                                        <span className="font-mono text-hud-nano uppercase tracking-wider text-outline group-hover:text-primary transition-colors">
                                            GRADE: {project.grade}
                                        </span>
                                    </div>

                                    <div className="flex items-start gap-3 pt-2">
                                        <div className="mt-1 opacity-60 group-hover:opacity-100 group-hover:text-primary transition-all">
                                            {project.platform === 'github' ? <Code2 size={18} /> : <GitBranch size={18} />}
                                        </div>

                                        <div className="space-y-1">
                                            <h3 className="font-mono text-hud-base text-white uppercase group-hover:tracking-wider transition-all">
                                                {project.name}
                                            </h3>

                                            <p className="font-mono text-hud-micro text-outline italic leading-tight">
                                                &#34;{project.desc}&#34;
                                            </p>

                                            <div className="flex items-center gap-4 pt-2">
                                                <span className="font-mono text-hud-nano text-primary/60 uppercase">[{project.lang}]</span>
                                                <a
                                                    href={project.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1 font-mono text-hud-nano text-outline hover:text-white uppercase transition-colors"
                                                >
                                                    <ExternalLink size={10} /> Inspect_Source
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <footer className="pt-8 border-t border-white/5 mt-auto">
                    <div className="flex justify-between font-mono text-hud-nano text-outline uppercase tracking-widest">
                        <span>Items: {PROJECTS.length} / 50</span>
                        <span>Capacity: 1.2 TB</span>
                    </div>
                </footer>
            </div>

            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary/20" />
        </div>
    );
}