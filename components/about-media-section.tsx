export function AboutMediaSection() {
  return (
    <section className="relative py-24 bg-gray-800 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1742&auto=format&fit=crop"
          alt="オフィスミーティング"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          物流事務の「手作業」を、生成AIで変える。
        </h2>
        <p className="max-w-2xl mx-auto text-gray-200 mb-8">
          AIエージェント機能で伝票・請求・報告書の作成を効率化。10時間の研修で、各拠点のDX人材を育成しませんか。
        </p>
        <a
          href="#contact"
          className="inline-block px-10 py-4 rounded-full text-lg font-bold text-white shadow-lg transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#F58220" }}
        >
          無料相談はこちら
        </a>
      </div>
    </section>
  )
}
