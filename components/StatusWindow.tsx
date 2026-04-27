"use client";

export default function StatusWindow() {
    return (
        <div className="h-[85vh] w-full bg-[#1a2122]/90 backdrop-blur-2xl border border-[#00dbe9]/30 flex flex-col relative shadow-[20px_0_60px_rgba(0,0,0,0.8)]">

            {/* Decorative HUD "Scanner" line at the top */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-transparent opacity-50" />

            <div className="p-8 flex-1 flex flex-col justify-between">
                <div className="space-y-12">
                    {/* Header Section */}
                    <header className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-6 bg-primary" />
                            <h2 className="font-display text-4xl uppercase tracking-tighter text-white">Identity</h2>
                        </div>
                        <div className="font-mono text-[9px] text-primary/60 tracking-[.4em] uppercase">
                            Authenticated_User
                        </div>
                    </header>

                    {/* Stats Section */}
                    <section className="space-y-6">
                        <h3 className="font-mono text-[10px] text-outline uppercase tracking-widest border-b border-white/5 pb-2">Core_Parameters</h3>
                        <div className="space-y-4">
                            <StatItem label="STR" value="80" color="bg-primary" />
                            <StatItem label="CON" value="90" color="bg-primary" />
                            <StatItem label="DEX" value="30" color="bg-tertiary" />
                            <StatItem label="INT" value="75" color="bg-secondary" />
                            <StatItem label="WISDOM" value="80" color="bg-primary" />
                            <StatItem label="CHAR" value="70" color="bg-secondary" />
                        </div>
                    </section>

                    {/* Bio/Info Section */}
                    <section className="space-y-3">
                        <h3 className="font-mono text-[10px] text-outline uppercase tracking-widest border-b border-white/5 pb-2">Archive_Notes</h3>
                        <p className="text-[11px] leading-relaxed text-on-surface/70 font-mono italic">
                            &#34;A digital architect specializing in the construction of immersive web environments. No corporate history found; potential high-tier rogue developer.&#34;
                        </p>
                    </section>
                </div>

                {/* Footer Data */}
                <footer className="pt-8 border-t border-white/5">
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

function StatItem({ label, value, color }: { label: string, value: string, color: string }) {
    return (
        <div className="space-y-1">
            <div className="flex justify-between font-mono text-[9px] uppercase">
                <span className="text-outline">{label}</span>
                <span className="text-white">{value}%</span>
            </div>
            <div className="h-[2px] w-full bg-white/5 relative">
                <div className={`absolute inset-y-0 left-0 ${color} shadow-[0_0_8px_currentColor]`} style={{ width: `${value}%` }} />
            </div>
        </div>
    );
}