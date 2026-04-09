import { BookOpen, Settings2, Users } from "lucide-react"

import { cn } from "@/lib/utils"

const outcomes = [
  {
    icon: Users,
    title: "「使える人材」が社内に育つ",
    body: "生成AIの基礎から実践的な活用まで一気通貫で習得。研修修了後は、指示を待つことなく自ら生成AIツールを業務に組み込める人材が育ちます。",
  },
  {
    icon: Settings2,
    title: "定型業務の時間を、本来の仕事へ",
    body: "文書作成・データ整理・社内外のやりとりといった繰り返し業務をAIで自動化。一人ひとりの作業時間を削減し、付加価値の高い業務に集中できる環境をつくります。",
  },
  {
    icon: BookOpen,
    title: "個人の成果が、組織の資産になる",
    body: "研修で構築した業務効率化ソリューションは、最終回の成果発表会でチーム全体に共有。現場で培ったノウハウが組織の共有資産として定着し、研修後も組織に価値が残り続けます。",
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
