import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function ClickHint({ visible = true }) {
  if (!visible) return null;
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-amber-200/90"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Sparkles size={18} className="drop-shadow" />
      <motion.span
        animate={{ opacity: [1, 0.6, 1] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        className="text-sm tracking-wide"
      >
        Tap the moving picture to open
      </motion.span>
    </motion.div>
  );
}
