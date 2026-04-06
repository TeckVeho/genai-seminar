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
        <li key={i} className="relative pb-6 pl-10">
          {i < steps.length - 1 && (
            <span className="absolute bottom-0 left-[15px] top-7 w-0.5 bg-brand-primary" />
          )}
          <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary text-sm font-bold text-white">
            {startFrom + i}
          </span>
          <strong className="text-fluid-heading block font-bold text-brand-secondary">
            {step.title}
          </strong>
          <p className="text-fluid-caption mt-1 text-gray-600">{step.body}</p>
        </li>
      ))}
    </ul>
  )
}

export function FeaturesSection() {
  return (
    <section
      id="curriculum"
      className="section-y section-x bg-brand-light-gray"
    >
      <div className="container mx-auto">
        <h2 className="text-fluid-section mb-8 text-center font-bold text-brand-secondary md:mb-16">
          オンライン座学とオフライン実践を組み合わせたカリキュラム
        </h2>
        <div className="grid gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16">
          <div className="rounded-xl bg-white p-4 shadow-soft md:p-8">
            <h3 className="text-fluid-heading-lg mb-6 border-b-2 border-blue-200 pb-4 font-bold text-brand-secondary">
              オンライン座学（5時間）
            </h3>
            <CurriculumList steps={onlineSteps} startFrom={1} />
          </div>

          <div className="rounded-xl bg-white p-4 shadow-soft md:p-8">
            <h3 className="text-fluid-heading-lg mb-6 border-b-2 border-blue-200 pb-4 font-bold text-brand-secondary">
              オフライン実践（5時間）
            </h3>
            <CurriculumList steps={offlineSteps} startFrom={6} />
          </div>
        </div>
      </div>
    </section>
  )
}
