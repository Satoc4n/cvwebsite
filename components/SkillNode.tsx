"use client";
import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface SkillNodeProps {
    name: string;
    icon: LucideIcon;
    level: number;
    unlocked: boolean;
    color: string;
}

export default function SkillNode({ name, icon: Icon, level, unlocked, color }: SkillNodeProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center gap-2 group cursor-pointer"
        >
            <div
                className={`relative w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                    unlocked
                        ? "bg-[#1a2122] shadow-[0_0_15px_rgba(0,219,233,0.2)]"
                        : "bg-[#0d1516] border-[#849495]/20 opacity-40 grayscale"
                }`}
                style={{ borderColor: unlocked ? color : "" }}
            >
                {unlocked && (
                    <div
                        className="absolute inset-0 rounded-full animate-pulse opacity-10"
                        style={{ backgroundColor: color }}
                    />
                )}

                <Icon
                    size={24}
                    className="relative z-10"
                    style={{ color: unlocked ? color : "#849495" }}
                />
            </div>

            <div className="text-center">
                <p className={`font-mono text-hud-nano uppercase tracking-widest ${unlocked ? "text-white" : "text-[#849495]"}`}>
                    {name}
                </p>
                {unlocked && (
                    <div className="flex justify-center gap-0.5 mt-1">
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="h-1 w-2"
                                style={{ backgroundColor: i < level ? color : "rgba(255,255,255,0.1)" }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
}