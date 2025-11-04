import { useEffect, useState } from 'react';
import MagicalBackground from './components/MagicalBackground';
import MovingNewspaper from './components/MovingNewspaper';
import InvitationSections from './components/InvitationSections';
import ClickHint from './components/ClickHint';

export default function App() {
  const [opened, setOpened] = useState(false);
  const [showSections, setShowSections] = useState(false);

  // After zoom animation, reveal sections
  useEffect(() => {
    if (opened) {
      const t = setTimeout(() => setShowSections(true), 700);
      return () => clearTimeout(t);
    }
  }, [opened]);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden overflow-y-auto">
      <MagicalBackground />

      <main className="relative z-10 flex min-h-screen items-center justify-center p-6">
        {!showSections && (
          <div className="w-full text-center">
            <h1 className="mb-6 text-2xl md:text-3xl font-serif tracking-wide text-amber-100/90">
              A Daily Prophet Exclusive
            </h1>
            <MovingNewspaper zoomed={opened} onOpen={() => setOpened(true)} />
          </div>
        )}
      </main>

      {showSections && <InvitationSections />}

      <ClickHint visible={!opened && !showSections} />
    </div>
  );
}
