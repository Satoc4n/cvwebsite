"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Power } from "lucide-react";
import { motion } from "motion/react";

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // Prevent hydration mismatch by waiting for mount
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="fixed top-8 right-8 z-50 p-3 border border-[#849495]/30 bg-[#161d1e]/80 backdrop-blur-md shadow-[0_0_15px_rgba(0,219,233,0.1)] group transition-all"
        >
            <Power
                className={`w-5 h-5 transition-colors ${
                    theme === "dark" ? "text-[#00dbe9] drop-shadow-[0_0_8px_#00dbe9]" : "text-[#849495]"
                }`}
            />

            {/* Label that appears on hover */}
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-hud-micro uppercase tracking-[0.2em] text-[#00dbe9] whitespace-nowrap bg-[#242b2c] px-3 py-1 border border-[#00dbe9]/20 font-mono">
        {theme === "dark" ? "System: Online" : "System: Archive"}
      </span>
        </motion.button>
    );
}