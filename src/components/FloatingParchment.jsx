import { motion } from 'framer-motion';

export default function FloatingParchment({ zoomed = false, onOpen, children }) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      className="relative mx-auto block focus:outline-none"
      initial={false}
      animate={zoomed ? 'zoom' : 'idle'}
      variants={{
        idle: { scale: 1, rotate: -2, y: 0, filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.45))' },
        zoom: { scale: 1.35, rotate: 0, y: 0, filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.6))' },
      }}
      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      style={{ width: 520, maxWidth: '88vw' }}
      aria-label="Open invitation"
    >
      {/* Parchment base */}
      <motion.div
        className="relative w-full rounded-md border border-amber-900/30"
        animate={zoomed ? { y: 0, rotate: 0 } : { y: [0, -6, 0, 6, 0], rotate: [-2, -1, -2.5, -1, -2] }}
        transition={zoomed ? { duration: 0.4 } : { duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1), transparent 25%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.06), transparent 30%), linear-gradient(135deg, #f1e4c6, #e5d2a9)',
          backgroundBlendMode: 'overlay, overlay, normal',
        }}
      >
        {/* Subtle paper grain */}
        <div className="absolute inset-0 opacity-[0.18] mix-blend-multiply bg-[repeating-linear-gradient(0deg,rgba(70,45,15,0.08)_0px,rgba(70,45,15,0.08)_1px,transparent_1px,transparent_3px)]" />
        {/* Edges burn */}
        <div className="absolute inset-0 rounded-md pointer-events-none shadow-[inset_0_0_40px_10px_rgba(120,70,20,0.35)]" />

        {/* Letter content (cover) */}
        <div className="relative px-8 py-10 text-center">
          <h1 className="font-serif text-3xl md:text-4xl text-amber-900/95 tracking-wide">
            Hogwarts School of Witchcraft and Wizardry
          </h1>
          <p className="mt-2 text-amber-900/90 italic">By order of Headmaster Albus Dumbledore</p>

          {/* Wax seal */}
          <div className="mt-8 flex items-center justify-center">
            <div className="h-14 w-14 rounded-full bg-red-800/90 shadow-[inset_0_2px_4px_rgba(0,0,0,0.25),0_8px_20px_rgba(0,0,0,0.4)] relative">
              <div className="absolute inset-2 rounded-full border-2 border-red-900/60" />
            </div>
          </div>

          {/* Fold hint lines */}
          <div className="mt-8 h-px w-full bg-amber-900/20" />
          <div className="mt-2 h-px w-3/4 mx-auto bg-amber-900/10" />
        </div>

        {/* Actual invitation content fades in after zoom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={zoomed ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center px-8 py-10"
        >
          <div className="text-center max-w-xl">
            {children}
          </div>
        </motion.div>
      </motion.div>
    </motion.button>
  );
}
