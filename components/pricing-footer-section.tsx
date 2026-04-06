export function PricingFooterSection() {
  return (
    <footer style={{ backgroundColor: "#02396B" }} className="text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
          <div>
            <p className="text-xl font-bold mb-1">株式会社 DX研究所</p>
            <p className="text-sm text-white/70">物流事務DX人材育成プログラム</p>
            <p className="text-xs text-white/50 mt-2 max-w-md leading-relaxed">
              〒102-0093 東京都千代田区平河町１－７－３ 第四大盛丸平河町ビル３階
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-sm text-white/80">
            <a
              href="mailto:hikota@d-dxlab.com"
              className="hover:text-white transition-colors"
            >
              hikota@d-dxlab.com
            </a>
            <span className="hidden sm:inline text-white/40">|</span>
            <a
              href="tel:0352178988"
              className="hover:text-white transition-colors"
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
