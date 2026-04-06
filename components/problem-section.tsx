import { HelpCircle, BarChart3, Lightbulb } from "lucide-react"

const problems = [
  {
    icon: HelpCircle,
    title: "電話・伝票・請求…手作業が減らない",
    body: "配車指示の電話対応記録、送り状・伝票入力、請求照合を手作業のまま続けており、ミスや残業の温床になっている。",
  },
  {
    icon: BarChart3,
    title: "拠点ごとにやり方がバラバラ",
    body: "複数拠点に分散する事務スタッフ間でノウハウが共有されず、同じ非効率が各所で繰り返されている。",
  },
  {
    icon: Lightbulb,
    title: "AIツールを学んでも業務に落とせない",
    body: "一般的なAI研修を受けても「自分の伝票業務にどう使えばいいのか」が分からず、活用が定着しない。",
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="container mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: "#02396B" }}
        >
          物流事務の非効率が、現場の負担になっていませんか？
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
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
