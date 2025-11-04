import Spline from '@splinetool/react-spline';

// Fullscreen interactive Spline hero background
export default function HeroSpline() {
  return (
    <div className="absolute inset-0">
      {/* Interactive Spline scene */}
      <Spline
        scene="https://prod.spline.design/a6HhFsV3-DN9Z-yP/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Gentle gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_40%,rgba(255,255,255,0.06),transparent)]" />
    </div>
  );
}
