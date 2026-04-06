"use client"

export function MobileCtaBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white/90 backdrop-blur-md md:hidden"
      style={{
        paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
      }}
    >
      <div className="px-4 pt-3">
        <a
          href="#contact"
          className="flex min-h-[48px] w-full items-center justify-center rounded-full bg-brand-accent text-base font-bold text-white shadow-soft transition-opacity hover:opacity-90 active:opacity-90"
        >
          無料相談する
        </a>
      </div>
    </div>
  )
}
