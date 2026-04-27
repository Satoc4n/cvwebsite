"use client";
import { motion } from "motion/react";
import { Shield, Zap, Target, Star } from "lucide-react";

export default function StatusWindow() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative group max-w-md w-full p-1 rounded-lg bg-linear-to-b from-cyan-500/30 to-transparent backdrop-blur-md"
    >
      {/* Scanline Overlay Effect @TODO Find a better solution. Depending on the final aesthetic can be distracting. */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px] z-10 opacity-30"></div>

      <div className="bg-slate-950/90 p-6 rounded-md border border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-cyan-900/50 pb-3 mb-6">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-cyan-400 animate-pulse" />
            <h2 className="text-cyan-400 font-mono text-[10px] tracking-[0.2em] uppercase">
              Character Status
            </h2>
          </div>
          <span className="text-[10px] text-slate-500 font-mono italic">UID: 001-001-00001-00001</span>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <section>
            <h1 className="text-4xl font-serif tracking-tighter text-white uppercase mb-1">
              Your Name
            </h1>
            <p className="text-cyan-500 font-mono text-xs uppercase tracking-widest">
              Class: [ The Unemployed Architect ]
            </p>
          </section>

          {/* Stats Bar */}
          <div className="space-y-3">
            <StatBar label="React Synchronicity" value={65} icon={<Zap size={12}/>} />
            <StatBar label="CSS Manipulation" value={82} icon={<Target size={12}/>} />
            <StatBar label="Algorithm Logic" value={40} icon={<Star size={12}/>} />
          </div>

          {/* Lore/About */}
          <div className="bg-cyan-500/5 p-3 border-l-2 border-cyan-500/50 italic">
            <p className="text-[11px] text-slate-300 leading-relaxed">
              &#34;Placeholder content for now. A motto etc could be nice.&#34;
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function StatBar({ label, value, icon }: { label: string, value: number, icon: React.ReactNode }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center text-[9px] uppercase tracking-wider text-slate-400">
        <span className="flex items-center gap-1">{icon} {label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-1 bg-slate-900 rounded-full overflow-hidden border border-white/5">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
          className="h-full bg-linear-to-r from-cyan-600 to-cyan-400 shadow-[0_0_8px_#06b6d4]"
        />
      </div>
    </div>
  );
}