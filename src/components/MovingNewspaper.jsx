import { motion } from 'framer-motion';

export default function MovingNewspaper({ zoomed = false, onOpen }) {
  return (
    <motion.div
      className="relative mx-auto w-[900px] max-w-[92vw]"
      initial={false}
      animate={zoomed ? 'zoom' : 'idle'}
      variants={{
        idle: { scale: 1, rotate: -0.5, y: 0, opacity: 1 },
        zoom: { scale: 1.3, rotate: 0, y: 0, opacity: 0.12 },
      }}
      transition={{ type: 'spring', stiffness: 110, damping: 18 }}
    >
      <motion.button
        type="button"
        onClick={onOpen}
        className="relative block w-full overflow-hidden rounded-md bg-[#efe9db] text-left shadow-2xl ring-1 ring-zinc-900/10"
        aria-label="Open the moving picture"
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-3 border-b border-amber-900/20">
          <h1 className="text-center font-serif text-3xl md:text-5xl tracking-wide text-amber-900">
            The Daily Prophet
          </h1>
          <p className="mt-1 text-center text-xs md:text-sm tracking-widest text-amber-800/70">
            Established 1743 • Britain’s Wizarding Newspaper
          </p>
        </div>

        {/* Grid columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          <div className="text-amber-900/90 space-y-3 leading-relaxed">
            <p>
              Ministry officials confirm a most enchanting union to be celebrated within the ancient halls of
              Hogwarts. Witnesses report owls seen in unusual formation above the Black Lake at dawn.
            </p>
            <p className="hidden md:block">
              Tailors at Madam Malkin’s are said to be overwhelmed with orders for formal robes, with a surge in
              vintage house colors and phoenix-feather accessories.
            </p>
          </div>

          {/* Moving picture */}
          <div className="relative">
            <motion.div
              className="relative aspect-[4/3] overflow-hidden rounded-sm border border-amber-900/30 shadow-lg"
              animate={zoomed ? { scale: 1.12 } : {}}
              transition={{ duration: 0.4 }}
            >
              {/* Sepia video loop effect using gradients and floating frames */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,0,0,0.15),transparent_60%)]" />
              <motion.div
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center"
                animate={{ scale: [1, 1.06, 1], x: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Film scratches */}
              <div className="absolute inset-0 mix-blend-multiply opacity-30 bg-[repeating-linear-gradient(90deg,rgba(60,45,20,0.35)_0px,rgba(60,45,20,0.35)_1px,transparent_1px,transparent_3px)]" />
              {/* Frame */}
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_30px_8px_rgba(0,0,0,0.45)]" />
            </motion.div>
            <p className="mt-2 text-center text-xs tracking-wide text-amber-800/70">Tap the moving picture</p>
          </div>

          <div className="text-amber-900/90 space-y-3 leading-relaxed">
            <p>
              Reports indicate a guest list of notable witches and wizards, with enchanted arrangements by Professor
              Sprout and a celestial charm display by students of Astronomy.
            </p>
            <p className="hidden md:block">
              The Fat Lady has prepared a repertoire of celebratory arias, while the house-elves perfect a feast for
              the ages.
            </p>
          </div>
        </div>
      </motion.button>
    </motion.div>
  );
}
