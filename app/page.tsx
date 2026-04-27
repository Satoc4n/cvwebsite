"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import StatusWindow from "@/components/StatusWindow";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center p-6 overflow-hidden bg-black">
      
      {/* 1. The Loading System */}
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* 2. The Background World (Only visible after loading) */}
      {!isLoading && (
        <>
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_-20%,#1e293b,black)] animate-in fade-in duration-1000"></div>
          <div className="absolute inset-0 z-0 opacity-[0.03] bg-[size:30px_30px] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]"></div>

          <div className="z-10 w-full flex flex-col items-center gap-12">
            <StatusWindow />
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4, y: [0, 10, 0] }}
              transition={{ duration: 2, delay: 1, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-500">Scroll to view Quests</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent"></div>
            </motion.div>
          </div>
        </>
      )}
    </main>
  );
}