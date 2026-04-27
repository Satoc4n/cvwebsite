"use client";
import { motion } from "motion/react";
import InventoryCard from "./InventoryCard";

// @TODO Finish

const ITEMS = [
    { name: "System_HUD", grade: "Epic", type: "Artifact", desc: "Next.js 16 single-page interface." },
    { name: "React_Logic", grade: "Rare", type: "Skill", desc: "Advanced state and animation sync." },
];

export default function InventoryGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl custom-scrollbar overflow-y-auto max-h-[50vh] p-2">
            {ITEMS.map((item, i) => (
                <div key={i} className="border border-outline/20 bg-surface-container/80 p-4 relative group">
                    <span className="text-[8px] text-primary uppercase block mb-1">{item.type} | {item.grade}</span>
                    <h4 className="font-display text-xl uppercase mb-2">{item.name}</h4>
                    <p className="text-hud-micro opacity-60 italic">"{item.desc}"</p>
                </div>
            ))}
        </div>
    );
}