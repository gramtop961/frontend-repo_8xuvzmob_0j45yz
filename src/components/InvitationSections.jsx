import { motion } from 'framer-motion';

function Section({ children }) {
  return (
    <section className="relative mx-auto w-[1100px] max-w-[92vw] py-16">
      {children}
    </section>
  );
}

function SectionHeader({ eyebrow, title }) {
  return (
    <div className="mb-8">
      <p className="uppercase tracking-[0.35em] text-xs text-amber-200/70">{eyebrow}</p>
      <h2 className="mt-2 font-serif text-3xl md:text-4xl text-amber-50">{title}</h2>
    </div>
  );
}

export default function InvitationSections() {
  const fadeIn = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative z-10">
      {/* Details */}
      <Section>
        <SectionHeader eyebrow="Invitation" title="Hermione Granger & Ron Weasley" />
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="rounded-xl border border-amber-900/30 bg-[#efe9db]/90 p-8 text-amber-900 shadow-xl"
        >
          <p className="text-lg md:text-xl">
            With joy and magic, we invite you to celebrate our wedding at Hogwarts School of Witchcraft and Wizardry.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <p className="text-amber-800/70 uppercase text-xs tracking-widest">Date</p>
              <p className="mt-1 font-serif text-xl">Saturday, 21 June 2025</p>
            </div>
            <div>
              <p className="text-amber-800/70 uppercase text-xs tracking-widest">Time</p>
              <p className="mt-1 font-serif text-xl">5 o'clock in the evening</p>
            </div>
            <div>
              <p className="text-amber-800/70 uppercase text-xs tracking-widest">Location</p>
              <p className="mt-1 font-serif text-xl">The Great Hall, Hogwarts Castle</p>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Gallery */}
      <Section>
        <SectionHeader eyebrow="Gallery" title="Memories in Motion" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {[
            'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1431440869543-efaf3388c585?q=80&w=1200&auto=format&fit=crop',
          ].map((src, i) => (
            <motion.div
              key={src}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-amber-900/30 bg-[#efe9db]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <img src={src} alt="Memory" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_30px_8px_rgba(0,0,0,0.45)]" />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Schedule */}
      <Section>
        <SectionHeader eyebrow="Schedule" title="Evening of Enchantment" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            ['Arrival', '4:30 PM'],
            ['Ceremony', '5:00 PM'],
            ['Feast & Toasts', '6:00 PM'],
            ['Dancing & Fireworks', '8:00 PM'],
          ].map(([label, time], i) => (
            <motion.div
              key={label}
              className="rounded-xl border border-amber-900/30 bg-[#efe9db]/90 p-5 text-amber-900 shadow"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <p className="text-amber-800/70 uppercase text-xs tracking-widest">{label}</p>
              <p className="mt-1 font-serif text-2xl">{time}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* RSVP */}
      <Section>
        <motion.div
          className="mx-auto max-w-xl text-center"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-serif text-3xl text-amber-50">Join Us</h3>
          <p className="mt-2 text-amber-200/80">
            Kindly reply by owl post or Muggle mail. We can’t wait to celebrate with you!
          </p>
          <a
            href="mailto:owl-post@hogwarts.edu?subject=RSVP%20to%20Hermione%20%26%20Ron"
            className="mt-6 inline-block rounded-full bg-amber-500 px-6 py-3 font-medium text-zinc-900 shadow hover:bg-amber-400 transition"
          >
            Send RSVP
          </a>
        </motion.div>
      </Section>

      <div className="h-24" />
    </div>
  );
}
