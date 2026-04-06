const onlineSteps = [
  {
    title: "業務棚卸し",
    body: "自分の業務を洗い出し、AI化の対象を見つけます。",
  },
  {
    title: "生成AI概論",
    body: "AI基礎・プロンプト設計・リスク管理・ツール機能の全体像を学びます。",
  },
  {
    title: "AIエージェント入門 (1)",
    body: "エージェント機能の基本操作とドキュメント自動生成を体験します。",
  },
  {
    title: "AIエージェント入門 (2)",
    body: "ファイル操作とExcel・スプレッドシートの自動生成を習得します。",
  },
  {
    title: "AIエージェント入門 (3)",
    body: "プロジェクト活用・スケジュールタスク・複合タスクを体験します。",
  },
]

const offlineSteps = [
  {
    title: "業務課題の深堀り",
    body: "業務課題を分析し、AIエージェントで自動化するタスクを設計します。",
  },
  {
    title: "ソリューション構築 (1)",
    body: "プロトタイプを開発します。",
  },
  {
    title: "ソリューション構築 (2)",
    body: "改善・機能追加を行います。",
  },
  {
    title: "ソリューション構築 (3)",
    body: "仕上げ・テスト・プロジェクト化を行います。",
  },
  {
    title: "成果発表会",
    body: "成果を共有し、ナレッジベース化します。",
  },
]

function CurriculumList({
  steps,
  startFrom = 1,
}: {
  steps: { title: string; body: string }[]
  startFrom?: number
}) {
  return (
    <ul className="mt-6 space-y-0">
      {steps.map((step, i) => (
        <li key={i} className="relative pl-10 pb-6">
          {i < steps.length - 1 && (
            <span
              className="absolute left-[15px] top-7 bottom-0 w-0.5"
              style={{ backgroundColor: "#005BAC" }}
            />
          )}
          <span
            className="absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
            style={{ backgroundColor: "#005BAC" }}
          >
            {startFrom + i}
          </span>
          <strong
            className="block text-base font-bold"
            style={{ color: "#02396B" }}
          >
            {step.title}
          </strong>
          <p className="text-sm text-gray-600 mt-1">{step.body}</p>
        </li>
      ))}
    </ul>
  )
}

export function FeaturesSection() {
  return (
    <section
      id="curriculum"
      className="py-20 px-4"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <div className="container mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          style={{ color: "#02396B" }}
        >
          オンライン座学とオフライン実践を組み合わせたカリキュラム
        </h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3
              className="text-2xl font-bold mb-6 border-b-2 border-blue-200 pb-4"
              style={{ color: "#02396B" }}
            >
              オンライン座学（5時間）
            </h3>
            <CurriculumList steps={onlineSteps} startFrom={1} />
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3
              className="text-2xl font-bold mb-6 border-b-2 border-blue-200 pb-4"
              style={{ color: "#02396B" }}
            >
              オフライン実践（5時間）
            </h3>
            <CurriculumList steps={offlineSteps} startFrom={6} />
          </div>
        </div>
      </div>
    </section>
  )
}
