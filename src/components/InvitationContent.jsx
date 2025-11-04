import { motion } from 'framer-motion';

export default function InvitationContent() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-amber-900"
    >
      <h2 className="font-serif text-4xl md:text-5xl tracking-wide">Hermione & Ron</h2>
      <p className="mt-1 text-amber-800/90 italic">cordially invite you to celebrate their wedding</p>

      <div className="mt-6 space-y-2 font-serif text-lg">
        <p>Saturday, 21st of June, 2025</p>
        <p>At 5 o'clock in the evening</p>
        <p>The Great Hall, Hogwarts Castle</p>
      </div>

      <div className="mt-8">
        <p className="uppercase tracking-[0.3em] text-sm text-amber-800/80">Dress Code</p>
        <p className="mt-1 italic">Formal wizarding attire encouraged</p>
      </div>

      <div className="mt-10 flex flex-col items-center gap-3">
        <a
          href="mailto:owl-post@hogwarts.edu?subject=RSVP%20to%20Hermione%20%26%20Ron"
          className="rounded-full bg-amber-900 text-amber-50 px-6 py-2 shadow hover:bg-amber-800 transition"
        >
          Send your RSVP
        </a>
        <p className="text-xs text-amber-800/70">Please respond by May 20th</p>
      </div>
    </motion.div>
  );
}
