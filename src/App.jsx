import { useState } from 'react';
import MagicalBackground from './components/MagicalBackground';
import FloatingParchment from './components/FloatingParchment';
import InvitationContent from './components/InvitationContent';
import ClickHint from './components/ClickHint';

export default function App() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <MagicalBackground />

      <main className="relative z-10 flex min-h-screen items-center justify-center p-6">
        <div className="text-center w-full">
          <h1 className="mb-8 text-2xl md:text-3xl font-serif tracking-wide text-amber-100/90">
            A Magical Invitation Awaits
          </h1>

          <FloatingParchment zoomed={opened} onOpen={() => setOpened(true)}>
            <InvitationContent />
          </FloatingParchment>
        </div>
      </main>

      <ClickHint visible={!opened} />
    </div>
  );
}
