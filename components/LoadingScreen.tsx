"use client";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

// BOOT LOGS for the loading screen
const BOOT_LOGS = [
  "[ OK ] INITIALIZING CORE_SYSTEM_v.0.0.1",
  "[ OK ] LOADING LORE_DATABASE...",
  "[ OK ] SYNCHRONIZING ASSETS",
  "[ OK ] BOOTING INTERFACE",
  "[ OK ] SYSTEM READY."
];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [currentLog, setCurrentLog] = useState(0);

  useEffect(() => {
    if (currentLog < BOOT_LOGS.length - 1) {
      const timer = setTimeout(() => setCurrentLog(prev => prev + 1), 600);
      return () => clearTimeout(timer);
    } else {
      const finishTimer = setTimeout(onComplete, 1000);
      return () => clearTimeout(finishTimer);
    }
  }, [currentLog, onComplete]);

  // Main Loading Screen Component 
  return (
    <motion.div 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black font-mono p-4"
    >
      <div className="w-full max-w-sm space-y-4">
        {/* The Glowing Logo/Icon */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-12 h-12 border-2 border-cyan-500 mx-auto rounded-sm flex items-center justify-center"
        >
          <div className="w-6 h-1 bg-cyan-500 shadow-[0_0_10px_#00f2ff]"></div>
        </motion.div>

        {/* Boot Logs */}
        <div className="h-24 overflow-hidden">
          {BOOT_LOGS.slice(0, currentLog + 1).map((log, i) => (
            <motion.p 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[10px] text-cyan-500/80 leading-relaxed"
            >
              {log}
            </motion.p>
          ))}
        </div>

        {/* Loading Bar */}
        <div className="w-full h-[2px] bg-slate-900 overflow-hidden">
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3.5, ease: "linear" }}
            className="h-full bg-cyan-500 shadow-[0_0_15px_#00f2ff]"
          />
        </div>
      </div>
    </motion.div>
  );
}