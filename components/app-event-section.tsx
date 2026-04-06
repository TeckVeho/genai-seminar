"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqItems = [
  {
    q: "PCスキルに自信がない社員でも参加できますか？",
    a: "はい、問題ありません。PCの基本操作ができる方であれば、どなたでもご参加いただけるように設計しています。生成AIツールの導入から丁寧にサポートします。",
  },
  {
    q: "どのAIツールを使いますか？",
    a: "貴社の環境やポリシーに合わせて最適なツールを選定します。主要な生成AIのエージェント機能を活用し、統一された操作体系で学べるプログラムです。",
  },
  {
    q: "機密情報をAIに入力しても大丈夫ですか？",
    a: "研修ではマスキングルールを周知します。企業向け契約プランの活用により、アクセス権限の管理を強化できます。ご契約内容に応じて入力できるデータの範囲が異なるため、社内ポリシーとあわせて事前にご確認ください。",
  },
  {
    q: "助成金の申請手続きが不安です",
    a: "計画届の書類作成から支給申請まで、必要書類は当社が準備・サポートします。受講企業様の手続き負担を軽減できるよう伴走します。",
  },
  {
    q: "研修の費用はどのくらいかかりますか？",
    a: "1社あたり40万円（税別・受講者10名まで一律）が目安です。人材開発支援助成金を活用すると、中小企業の場合は経費助成の目安で実質負担が約25%〜になるケースがあります。詳細はお問い合わせください。",
  },
  {
    q: "オンラインのみでも受講できますか？",
    a: "第1〜5回はオンラインで実施します。第6〜10回のワークショップは対面を推奨していますが、貴社の事情に応じてご相談ください。",
  },
]

export function AppEventSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: "#02396B" }}
        >
          よくあるご質問
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span
                  className="text-base font-bold pr-4"
                  style={{ color: "#02396B" }}
                >
                  Q. {item.q}
                </span>
                <ChevronDown
                  className={cn(
                    "flex-shrink-0 transition-transform",
                    openIndex === i ? "rotate-180" : ""
                  )}
                  style={{ color: "#005BAC" }}
                  size={20}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <p className="pt-4 text-gray-600">A. {item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
