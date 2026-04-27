"use client";

import {Code2, Database, Layout, Car, Trophy, Cpu} from "lucide-react";
import SkillNode from "./SkillNode";

const TECH_SKILLS = [
    {name: "Frontend", icon: Layout, level: 4, unlocked: true, color: "#00dbe9"},
    {name: "React/Next", icon: Code2, level: 3, unlocked: true, color: "#00dbe9"},
    {name: "Backend", icon: Database, level: 1, unlocked: true, color: "#00dbe9"},
    {name: "AI_Systems", icon: Cpu, level: 0, unlocked: false, color: "#ddb7ff"},
];

const HOBBY_SKILLS = [
    {name: "T_Tennis", icon: Trophy, level: 5, unlocked: true, color: "#e9c176"},
    {name: "Mechanics", icon: Car, level: 3, unlocked: true, color: "#e9c176"},
];

export default function SkillTree() {
    return (
        <div className="relative w-full max-w-3xl p-8 bg-[#1a2122]/40 backdrop-blur-md border border-[#849495]/10">
            <div className="relative z-10 space-y-12">
                {/* Tech Section */}
                <div>
                    <h3 className="font-mono text-hud-micro text-[#00dbe9] tracking-[0.4em] uppercase mb-8 text-center">
                        Technical_Aptitude
                    </h3>
                    <div className="flex justify-center gap-8 md:gap-16">
                        {TECH_SKILLS.map((skill) => (
                            <SkillNode key={skill.name} {...skill} />
                        ))}
                    </div>
                </div>

                {/* Hobby Section */}
                <div className="border-t border-white/5 pt-12">
                    <h3 className="font-mono text-hud-micro text-[#e9c176] tracking-[0.4em] uppercase mb-8 text-center">
                        Innate_Talents
                    </h3>
                    <div className="flex justify-center gap-8 md:gap-16">
                        {HOBBY_SKILLS.map((skill) => (
                            <SkillNode key={skill.name} {...skill} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}