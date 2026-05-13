import { BookOpen, Wrench } from "lucide-react"

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
    body: "AIエージェントの概要と基本操作に加え、自然言語で業務タスクを実行する流れを体験します。文書作成やデータ処理など代表的な自動化も扱います。",
  },
  {
    title: "AIエージェント入門 (2)",
    body: "PC上のファイル操作と、表計算・スプレッドシート・データ処理など、ファイルを起点とした業務の自動化を体験します。",
  },
  {
    title: "AIエージェント入門 (3)",
    body: "プロジェクト活用・スケジュールタスク・複合タスクを体験します。",
  },
]

const workshopSteps = [
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
    title: "業務適用＋運用設計",
    body: "実際の業務データで動作を検証し、誰でも使える運用ルールと手順書を整備します。",
  },
  {
    title: "成果物の完成＋社内展開準備",
    body: "成果物を完成させ、社内展開に向けた効果測定の設計と発表資料を作成します。",
  },
  {
    title: "成果発表会",
    body: "成果を共有し、ナレッジベース化します。",
  },
]

type Phase = {
  label: string
  sessions: string
  hours: string
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  accentColor: string
  dotColor: string
  badgeBg: string
  badgeText: string
  steps: { title: string; body: string }[]
  startFrom: number
}

const phases: Phase[] = [
  {
    label: "座学フェーズ",
    sessions: "第 1 〜 5 回",
    hours: "5 時間",
    icon: BookOpen,
    accentColor: "from-blue-600 to-brand-primary",
    dotColor: "bg-blue-600",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-700",
    steps: onlineSteps,
    startFrom: 1,
  },
  {
    label: "実践・ワークショップ",
    sessions: "第 6 〜 12 回",
    hours: "7 時間",
    icon: Wrench,
    accentColor: "from-emerald-600 to-teal-500",
    dotColor: "bg-emerald-600",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-700",
    steps: workshopSteps,
    startFrom: 6,
  },
]

export function FeaturesSection() {
  return (
    <section
      id="curriculum"
      className="section-y section-x bg-brand-light-gray"
    >
      <div className="container mx-auto">
        {/* ヘッダー */}
        <div className="mb-10 text-center md:mb-16">
          <h2 className="text-fluid-section mb-3 font-bold text-brand-secondary">
            全12回オンラインで実施するカリキュラム
          </h2>
          <p className="text-fluid-body mx-auto max-w-xl text-gray-500">
            座学で基礎を固め、ワークショップで自社の業務課題を解決する
            <br className="hidden sm:inline" />
            一気通貫の実践型プログラム
          </p>
        </div>

        {/* フェーズカード */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {phases.map((phase) => {
            const Icon = phase.icon
            return (
              <div
                key={phase.label}
                className="overflow-hidden rounded-2xl bg-white shadow-soft"
              >
                {/* カードヘッダー */}
                <div
                  className={`bg-gradient-to-r ${phase.accentColor} px-6 py-5 text-white`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20">
                      <Icon className="size-5" strokeWidth={2} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                        {phase.label}
                      </p>
                      <p className="text-fluid-heading-lg font-bold leading-tight">
                        {phase.sessions}
                      </p>
                    </div>
                    <span className="ml-auto rounded-full bg-white/20 px-3 py-1 text-sm font-bold">
                      {phase.hours}
                    </span>
                  </div>
                </div>

                {/* ステップリスト */}
                <ul className="divide-y divide-gray-100 px-2 py-2">
                  {phase.steps.map((step, i) => (
                    <li
                      key={i}
                      className="group flex items-start gap-4 rounded-xl px-4 py-4 transition-colors hover:bg-gray-50"
                    >
                      <span
                        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${phase.dotColor} text-xs font-bold text-white`}
                      >
                        {phase.startFrom + i}
                      </span>
                      <div>
                        <strong className="text-fluid-heading block font-bold text-brand-secondary">
                          {step.title}
                        </strong>
                        <p className="text-fluid-caption mt-0.5 text-gray-500">
                          {step.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* フッター補足 */}
        <p className="mt-8 text-center text-sm text-gray-400">
          ※ 各回 60 分・全12回（合計 12 時間）のオンライン実施。人材開発支援助成金の実訓練時間要件（10 時間以上）を満たしています。
        </p>
      </div>
    </section>
  )
}
