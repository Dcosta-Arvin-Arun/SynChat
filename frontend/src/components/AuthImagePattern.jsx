import { useState } from "react";

const AuthImagePattern = ({ title, subtitle }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="hidden lg:flex relative items-center justify-center overflow-hidden bg-neutral-950 p-12"
    >
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,#6366f1,transparent_40%),radial-gradient(circle_at_80%_30%,#ec4899,transparent_40%),radial-gradient(circle_at_40%_80%,#14b8a6,transparent_40%)] animate-[pulse_8s_ease-in-out_infinite]" />

      <div
        className="absolute inset-0 transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(99,102,241,0.18), transparent 60%)`,
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60" />

      <div className="relative z-10 max-w-md text-center text-white">
        <h2 className="text-4xl font-bold mb-5 tracking-tight leading-tight bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-white/60 text-lg leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default AuthImagePattern;