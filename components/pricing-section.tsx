export function PricingSection() {
  return (
    <section id="pricing" className="section-y section-x bg-white">
      <div className="container mx-auto">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="text-fluid-section mb-4 font-bold text-brand-secondary">
            料金について
          </h2>
          <p className="text-fluid-lead mx-auto max-w-2xl text-gray-600">
            助成金申請にも必要となる料金情報を、このページでご確認いただけます。
          </p>
        </div>

        <div className="mx-auto max-w-xl">
          <div className="rounded-2xl border-2 border-brand-primary bg-white shadow-soft">
            <div className="rounded-t-2xl bg-brand-primary px-6 py-4 text-center text-white">
              <p className="text-fluid-heading-lg font-bold leading-snug">
                生成AI活用・業務効率化研修
              </p>
            </div>

            <div className="px-6 py-8 text-center md:px-10 md:py-10">
              <p className="text-sm font-medium text-brand-secondary">
                受講料（税別）・<span className="text-brand-accent">1名あたり</span>
              </p>
              <p className="mt-4 text-5xl font-bold tabular-nums text-brand-secondary md:text-6xl">
                <span>400,000</span>
                <span className="text-2xl font-semibold text-gray-500">円</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
