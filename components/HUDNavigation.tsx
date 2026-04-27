"use client";
import { motion } from "motion/react";

const NAV_ITEMS = [
    { id: "status", label: "STATUS" },
    { id: "inventory", label: "INVENTORY" },
    { id: "skills", label: "SKILLS" },
    { id: "lore", label: "LORE" },
];

interface NavProps {
    activeTab: string;
    onTabChange: (id: string) => void;
}

export default function HUDNavigation({ activeTab, onTabChange }: NavProps) {
    return (
        <nav className="fixed bottom-12 z-40 flex gap-2 bg-[#1a2122]/60 backdrop-blur-xl p-1 border border-[#849495]/20 shadow-2xl">
            {NAV_ITEMS.map((item) => (
                <button
                    key={item.id}
                    onClick={() => onTabChange(item.id)}
                    className="relative px-6 py-2 group overflow-hidden"
                >
          <span className={`relative z-10 font-mono text-[10px] tracking-[0.2em] transition-colors duration-300 ${
              activeTab === item.id ? "text-[#00dbe9]" : "text-[#849495] group-hover:text-white"
          }`}>
            {item.label}
          </span>

                    {activeTab === item.id && (
                        <motion.div
                            layoutId="nav-active-bg"
                            className="absolute inset-0 bg-[#00dbe9]/10 border border-[#00dbe9]/30"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}

                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#00dbe9] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 opacity-50" />
                </button>
            ))}
        </nav>
    );
}