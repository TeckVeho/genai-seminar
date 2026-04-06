"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#solution", label: "選ばれる理由" },
  { href: "#curriculum", label: "カリキュラム" },
  { href: "#subsidy", label: "助成金" },
  { href: "#lecturers", label: "講師紹介" },
  { href: "#flow", label: "導入の流れ" },
  { href: "#faq", label: "よくあるご質問" },
]

export function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      {/* ===== NAVBAR ===== */}
      <header
        className="sticky top-0 z-50 shadow-md"
        style={{ backgroundColor: "#02396B" }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#" className="flex items-center shrink-0 py-1">
              <Image
                src="/images/dx-logo.png"
                alt="Digital Transformation（DX）ロゴ"
                width={320}
                height={96}
                className="h-8 md:h-10 w-auto max-w-[min(100%,260px)]"
                priority
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/90 hover:text-white font-semibold transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="px-5 py-2 rounded-full font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#F58220" }}
              >
                無料相談する
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="メニューを開く"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="lg:hidden border-t border-white/20"
            style={{ backgroundColor: "#02396B" }}
          >
            <nav className="flex flex-col items-center p-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/90 hover:text-white font-semibold"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="w-full text-center px-5 py-2 rounded-full font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#F58220" }}
                onClick={() => setMenuOpen(false)}
              >
                無料相談する
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* ===== HERO ===== */}
      <section className="relative text-white" style={{ height: "80vh" }}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
            alt="プロフェッショナルチームがモダンなオフィスでノートパソコンを囲んでコラボレーションしている"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(2, 57, 107, 0.6)" }}
        />
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-2xl md:text-3xl font-bold">
            物流事務のDX人材を育成し、現場の生産性を変える
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-2 mb-4">
            物流事務DX人材育成プログラム
          </h2>
          <p className="text-base md:text-lg max-w-2xl mb-8">
            生成AIを使い、電話対応・伝票入力・請求処理・文書作成を効率化。全10回・10時間で、現場ですぐ使える実践力を。
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 rounded-full text-lg font-bold text-white shadow-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#F58220" }}
          >
            無料相談・資料請求はこちら
          </a>
        </div>
      </section>
    </div>
  )
}
