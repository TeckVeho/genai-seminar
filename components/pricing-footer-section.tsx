export function PricingFooterSection() {
  return (
    <footer className="bg-brand-secondary text-white">
      <div className="container mx-auto px-4 py-10 md:px-6">
        <div className="mb-6 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-fluid-heading-lg mb-1 font-bold">株式会社 DX研究所</p>
            <p className="text-sm text-white/70">
              物流企業特化 -
              <br />
              AI人材育成プログラム
            </p>
            <p className="mt-2 max-w-md text-xs leading-relaxed text-white/50">
              〒102-0093 東京都千代田区平河町１－７－３ 第四大盛丸平河町ビル３階
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-white/80 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="mailto:hikota@d-dxlab.com"
              className="transition-colors hover:text-white"
            >
              hikota@d-dxlab.com
            </a>
            <span className="hidden text-white/40 sm:inline">|</span>
            <a
              href="tel:0352178988"
              className="transition-colors hover:text-white"
            >
              03-5217-8988
            </a>
          </div>
        </div>
        <div className="border-t border-white/20 pt-6">
          <p className="text-center text-sm text-white/60">
            &copy; 株式会社 DX研究所. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
