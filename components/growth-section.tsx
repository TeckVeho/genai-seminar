import { FileText, Settings2, CheckCircle2 } from "lucide-react"

import { cn } from "@/lib/utils"

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
    <section className="section-y section-x bg-white">
      <div className="container mx-auto">
        <h2 className="text-fluid-section mb-8 text-center font-bold text-brand-secondary md:mb-12">
          研修で得られる3つの成果
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {outcomes.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className={cn(
                  "rounded-xl border-t-4 border-brand-primary bg-gray-50 p-4 text-center shadow-soft md:p-8",
                  i === outcomes.length - 1 &&
                    "sm:col-span-2 sm:mx-auto sm:max-w-md lg:col-span-1 lg:max-w-none"
                )}
              >
                <div className="mb-4 flex justify-center text-brand-primary">
                  <Icon className="size-12 md:size-[60px]" strokeWidth={1.5} />
                </div>
                <h3 className="text-fluid-heading mb-4 font-bold text-brand-secondary">
                  {item.title}
                </h3>
                <p className="text-fluid-body text-left text-gray-600">
                  {item.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
