import { CheckCircle2 } from "lucide-react"

const solutions = [
  {
    title: "業務課題起点の設計：学びが「自分ごと」になる",
    body: "初回に自身の業務を棚卸しし、座学で生成AIの基礎を学び、ワークショップで自分の課題を解決する一気通貫の構成です。",
  },
  {
    title: "AIエージェント機能で業務タスクを自動実行",
    body: "文書生成・Excel作成・データ処理を、自然言語の指示だけで自動化。ファイルのアップロード不要で、ローカルのExcel・Wordに直接出力できます。",
  },
  {
    title: "成果物をそのまま現場に持ち帰れる",
    body: "ワークショップの成果はExcel・Word・PowerPointとしてPC上に保存。研修内で個別の業務ソリューションが完成します。",
  },
]

export function SolutionSection() {
  return (
    <section id="solution" className="py-20 px-4 bg-white">
      <div className="container mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-12"
          style={{ color: "#02396B" }}
        >
          DX研究所の研修が選ばれる3つの理由
        </h2>
        <div className="max-w-3xl mx-auto text-left space-y-8">
          {solutions.map((item, i) => (
            <div key={i} className="flex items-start space-x-4">
              <CheckCircle2
                size={28}
                className="flex-shrink-0 mt-1"
                style={{ color: "#005BAC" }}
              />
              <div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: "#02396B" }}
                >
                  {item.title}
                </h3>
                <p className="mt-1 text-gray-600">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
