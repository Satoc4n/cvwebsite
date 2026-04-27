"use client";
import {
    Trophy, Zap, Lightbulb, BatteryLow,
    Coffee, Layers, Search, Target
} from "lucide-react";

// Ailments / Statuses.
// @TODO Find better icons and descriptions
const AILMENTS = [
    { id: 1, label: "Accomplished", icon: Trophy, color: "#e9c176", desc: "You have achieved a major project milestone." },
    { id: 2, label: "Awakened", icon: Zap, color: "#00dbe9", desc: "System is operating at maximum awareness." },
    { id: 3, label: "Inspired", icon: Lightbulb, color: "#ddb7ff", desc: "Creative synapses are firing at high frequency." },
    { id: 4, label: "Exhausted", icon: BatteryLow, color: "#ff6b6b", desc: "The person is feeling exhausted right now." },
    { id: 5, label: "Caffeinated", icon: Coffee, color: "#b5835a", desc: "Processing speed boosted by external stimulant." },
    { id: 6, label: "Overloaded", icon: Layers, color: "#ff9f43", desc: "Current task queue exceeds standard capacity." },
    { id: 7, label: "Seeking_Quest", icon: Search, color: "#849495", desc: "Actively scanning for professional opportunities." },
    { id: 8, label: "Focused", icon: Target, color: "#00dbe9", desc: "External distractions successfully filtered." },
];

export default function StatusWindow() {
    return (
        <div className="h-[85vh] w-full bg-[#1a2122]/90 backdrop-blur-2xl border border-[#00dbe9]/30 flex flex-col relative shadow-[20px_0_60px_rgba(0,0,0,0.8)]">

            {/* Decorative HUD "Scanner" line at the top */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-transparent opacity-50" />

            <div className="p-8 flex-1 flex flex-col justify-between overflow-y-auto custom-scrollbar">
                <div className="space-y-10">
                    {/* Header Section */}
                    <header className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-6 bg-primary" />
                            <h2 className="font-display text-hud-title uppercase tracking-tighter text-white">Identity</h2>
                        </div>
                        <div className="font-mono text-hud-nano text-primary/60 tracking-[.4em] uppercase">
                            Authenticated_User
                        </div>
                    </header>

                    {/* Stats Section */}
                    <section className="space-y-4">
                        <h3 className="font-mono text-hud-micro text-outline uppercase tracking-widest border-b border-white/5 pb-2">Core_Parameters</h3>
                        <div className="grid grid-cols-1 gap-3">
                            <StatItem label="STR" value="80" color="bg-primary" />
                            <StatItem label="CON" value="90" color="bg-primary" />
                            <StatItem label="DEX" value="30" color="bg-tertiary" />
                            <StatItem label="INT" value="75" color="bg-secondary" />
                            <StatItem label="WISDOM" value="80" color="bg-primary" />
                            <StatItem label="CHAR" value="70" color="bg-secondary" />
                        </div>
                    </section>

                    {/* Status Ailments Section */}
                    <section className="space-y-3">
                        <h3 className="font-mono text-hud-micro text-outline uppercase tracking-widest border-b border-white/5 pb-2">Status_Ailments</h3>
                        <div className="flex flex-wrap gap-2 pt-1">
                            {AILMENTS.map((item) => (
                                <div key={item.id} className="group relative">
                                    {/* Icon Box */}
                                    <div
                                        className="w-9 h-9 border border-white/10 bg-white/5 flex items-center justify-center transition-all group-hover:border-primary/50 group-hover:bg-primary/5 cursor-help"
                                        style={{ color: item.color }}
                                    >
                                        <item.icon size={18} />
                                    </div>

                                    {/* Tooltips for statuses */}
                                    <div className="absolute bottom-full left-0 mb-2 w-48 hidden group-hover:block z-50 pointer-events-none">
                                        <div className="bg-[#0d1516] border border-primary/40 p-2 shadow-2xl backdrop-blur-md">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-hud-nano font-mono font-bold uppercase" style={{ color: item.color }}>
                                                    {item.label}
                                                </span>
                                                <span className="text-[7px] text-outline font-mono">[ ACTIVE ]</span>
                                            </div>
                                            <p className="text-hud-micro text-on-surface/80 font-mono leading-tight italic">
                                                &#34;{item.desc}&#34;
                                            </p>
                                        </div>
                                        {/* Tooltip Arrow Starting point: https://www.w3schools.com/css/css_tooltip_arrows.asp */}
                                        <div className="w-2 h-2 bg-[#0d1516] border-r border-b border-primary/40 rotate-45 ml-3 -mt-1" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Bio/Info Section */}
                    <section className="space-y-3">
                        <h3 className="font-mono text-hud-micro text-outline uppercase tracking-widest border-b border-white/5 pb-2">Archive_Notes</h3>
                        <p className="text-hud-micro leading-relaxed text-on-surface/60 font-mono italic">
                            &#34;A digital architect specializing in the construction of immersive web environments. No corporate history found; potential high-tier rogue developer.&#34;
                        </p>
                    </section>
                </div>

                {/* Footer Data */}
                <footer className="pt-8 border-t border-white/5 mt-auto">
                    <div className="flex justify-between font-mono text-[8px] text-outline uppercase tracking-widest">
                        <span>Lat: 48.311420 Lon: 369.063521</span>
                        <span>OS: V.1.0.4</span>
                    </div>
                </footer>
            </div>

            {/* Corner bracket at the bottom right */}
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/20" />
        </div>
    );
}

//
function StatItem({ label, value, color }: { label: string, value: string, color: string }) {
    return (
        <div className="space-y-1">
            <div className="flex justify-between font-mono text-hud-nano uppercase">
                <span className="text-outline">{label}</span>
                <span className="text-white">{value}%</span>
            </div>
            <div className="h-[2px] w-full bg-white/5 relative">
                <div className={`absolute inset-y-0 left-0 ${color} shadow-[0_0_8px_currentColor] transition-all duration-1000`} style={{ width: `${value}%` }} />
            </div>
        </div>
    );
}