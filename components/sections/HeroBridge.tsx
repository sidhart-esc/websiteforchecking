'use client'

export default function HeroBridge() {
  return (
    <div className="relative w-full h-3 sm:h-4 bg-gradient-to-r from-[#7a1b20] via-[#962228] to-[#7a1b20] overflow-hidden border-y border-[#962228]/60 shadow-[0_2px_10px_rgba(150,34,40,0.3)] z-20">
      {/* Glow highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(230,57,70,0.5)_0%,transparent_80%)]" />
    </div>
  )
}
