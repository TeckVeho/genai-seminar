const steps = [
  {
    number: "01",
    title: "無料相談・ヒアリング",
    body: "受講者数・業務課題・利用環境（PC・契約状況）をお伺いします。",
  },
  {
    number: "02",
    title: "助成金の計画届を準備",
    body: "カリキュラム・契約書等の必要書類を当社が作成。訓練開始1か月前までに労働局へ提出します。",
  },
  {
    number: "03",
    title: "全10回の研修を実施",
    body: "オンライン座学5回＋オフラインワークショップ5回（各60分・総計10時間）。",
  },
  {
    number: "04",
    title: "効果測定・支給申請サポート",
    body: "Before/Afterレポート提出に加え、助成金の支給申請書類をサポートします。",
  },
]

export function UniversitySection() {
  return (
    <section
      id="flow"
      className="py-20 px-4"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <div className="container mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          style={{ color: "#02396B" }}
        >
          導入の流れ
        </h2>
        <div className="relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-300" />
          <div className="relative grid md:grid-cols-4 gap-8 text-center">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className="w-24 h-24 flex items-center justify-center text-white rounded-full text-3xl font-bold mb-4 z-10"
                  style={{ backgroundColor: "#005BAC" }}
                >
                  {step.number}
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "#02396B" }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
