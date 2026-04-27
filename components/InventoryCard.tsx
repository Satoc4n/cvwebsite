"use client";
import { motion } from "motion/react";

interface ItemProps {
    name: string;
    grade: string;
    description: string;
    type: string;
}

export default function InventoryCard({ name, grade, description, type }: ItemProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative p-4 border border-[#849495]/20 bg-[#1a2122]/80 h-40 flex flex-col justify-between group overflow-hidden"
        >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00dbe9]/40" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00dbe9]/40" />

            <div>
                <div className="flex justify-between items-center mb-1">
                    <span className="font-mono text-[8px] uppercase tracking-widest text-[#00dbe9]/60">{type}</span>
                    <span className="font-mono text-[8px] font-bold uppercase text-[#e9c176]">{grade}</span>
                </div>
                <h3 className="font-display text-lg uppercase text-white group-hover:text-[#00dbe9] transition-colors">
                    {name}
                </h3>
            </div>

            <p className="font-mono text-[10px] leading-relaxed text-[#849495] italic line-clamp-2">
                "{description}"
            </p>
        </motion.div>
    );
}