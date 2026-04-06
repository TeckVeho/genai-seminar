import { FileText, Settings2, CheckCircle2 } from "lucide-react"

const outcomes = [
  {
    icon: FileText,
    title: "個別の業務ソリューションが完成",
    body: "受講者ごとに自分の課題を解決する自動化ソリューションを構築。Excel・Word等としてそのまま現場で活用できます。",
  },
  {
    icon: Settings2,
    title: "Before/After を定量計測",
    body: "事前・事後アンケート（AIスキル自己評価・定型作業時間等）で変化を可視化。レーダーチャート付きレポートを研修終了後1週間以内に提出します。",
  },
  {
    icon: CheckCircle2,
    title: "ナレッジが組織に残る",
    body: "成果発表会でチーム全体にノウハウを共有。プロジェクト機能で社内ナレッジベースとして蓄積できます。",
  },
]

export function GrowthSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: "#02396B" }}
        >
          研修で得られる3つの成果
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {outcomes.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="bg-gray-50 p-8 rounded-lg shadow-lg text-center border-t-4"
                style={{ borderTopColor: "#005BAC" }}
              >
                <div
                  className="flex justify-center mb-4"
                  style={{ color: "#005BAC" }}
                >
                  <Icon size={60} />
                </div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: "#02396B" }}
                >
                  {item.title}
                </h3>
                <p className="text-left text-gray-600">{item.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
