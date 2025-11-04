import { motion } from 'framer-motion';

// A subtle magical starfield with drifting particles and vignette
export default function MagicalBackground() {
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 12,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Deep night gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a10] via-[#0d0b14] to-[#141018]" />

      {/* Soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.06),_transparent_60%)]" />

      {/* Drifting sparkles */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-white/80 shadow-[0_0_10px_2px_rgba(255,255,255,0.6)]"
            style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
            initial={{ opacity: 0.2 }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{ duration: p.duration, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
          />
        ))}
      </div>

      {/* Gold shimmer overlay */}
      <div className="pointer-events-none absolute inset-0 mix-blend-screen bg-[radial-gradient(20%_20%_at_20%_20%,rgba(255,230,150,0.15),transparent),radial-gradient(25%_25%_at_80%_30%,rgba(255,220,120,0.12),transparent)]" />
    </div>
  );
}
