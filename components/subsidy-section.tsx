import { PiggyBank } from "lucide-react"

export function SubsidySection() {
  return (
    <section id="subsidy" className="section-y section-x bg-blue-50">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-fluid-section mb-4 font-bold text-brand-secondary">
            助成金活用による費用サポート
          </h2>
          <p className="text-fluid-lead mx-auto mb-8 max-w-3xl text-gray-600 md:mb-12">
            当プログラムの導入も、人材開発支援助成金を活用し、企業負担を抑えられます。
          </p>
        </div>
        <div className="@container mx-auto flex max-w-4xl flex-col items-center gap-8 rounded-xl bg-white p-4 shadow-soft md:flex-row md:p-8 lg:p-12">
          <div className="text-center md:w-1/3">
            <div className="mb-4 flex justify-center text-brand-primary">
              <PiggyBank className="size-12 md:size-20" strokeWidth={1.5} />
            </div>
            <p className="text-fluid-heading font-bold text-brand-secondary">
              企業負担（目安）
            </p>
            <p className="text-fluid-stat font-bold text-brand-accent">
              実質25%〜
            </p>
            <p className="mt-2 text-sm text-gray-500">
              ※中小企業・経費助成の場合
            </p>
          </div>
          <div className="md:w-2/3 md:border-l md:border-gray-200 md:pl-8">
            <h3 className="text-fluid-heading-lg mb-4 font-bold text-brand-secondary">
              人材開発支援助成金（事業展開等リスキリング支援コース）
            </h3>
            <p className="text-fluid-body mb-4 text-gray-600">
              企業内のデジタル・DX化を進めるための訓練に対し、訓練経費および訓練期間中の賃金の一部を助成する制度です。当研修は「事業展開等リスキリング支援コース」のDX区分に対応しています。
            </p>
            <div className="space-y-2 rounded-lg bg-gray-100 p-4">
              <p className="font-bold">
                経費助成率：中小企業は最大75%、大企業は最大60%
              </p>
              <p className="text-sm text-gray-700">
                賃金助成：1人1時間あたり中小企業1,000円、大企業500円（所定外・休日の訓練は対象外）
              </p>
              <p className="text-sm text-gray-500">
                ※助成額・上限・要件は制度改正等で変更される場合があります。詳細はお問い合わせください。
              </p>
            </div>
            <p className="mt-4 font-semibold text-brand-secondary">
              計画届の添付に必要なカリキュラム・契約書等は当社がご用意。面倒な手続きをトータルでサポートしますので、お気軽にご相談ください。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
