"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 px-4" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#02396B" }}
          >
            まずはお気軽にご相談ください
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            資料請求・助成金の一般的な説明・開催形式のご提案まで対応いたします。研修内容・費用など、どんな小さなご質問でもお気軽にどうぞ。
            <br />
            通常2営業日以内にご返信いたします。
          </p>
          <p className="text-sm text-gray-600 mt-6">
            <span className="font-semibold" style={{ color: "#02396B" }}>
              連絡先
            </span>
            {" "}
            <a
              href="tel:0352178988"
              className="underline underline-offset-2 hover:opacity-80"
              style={{ color: "#005BAC" }}
            >
              TEL：03-5217-8988
            </a>
            {" "}
            <span className="text-gray-400">／</span>
            {" "}
            <a
              href="mailto:hikota@d-dxlab.com?subject=%E7%89%A9%E6%B5%81%E4%BA%8B%E5%8B%99DX%E4%BA%BA%E6%9D%90%E8%82%B2%E6%88%90%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"
              className="underline underline-offset-2 hover:opacity-80"
              style={{ color: "#005BAC" }}
            >
              MAIL：hikota@d-dxlab.com
            </a>
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-8">
              <div
                className="text-6xl mb-4 flex justify-center"
                style={{ color: "#005BAC" }}
              >
                <Send size={64} />
              </div>
              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: "#02396B" }}
              >
                お問い合わせを受け付けました
              </h3>
              <p className="text-gray-600">
                通常2営業日以内にご連絡いたします。しばらくお待ちください。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-bold mb-1"
                  style={{ color: "#02396B" }}
                >
                  会社名 <span className="text-red-500">*</span>
                </label>
                <input
                  id="company"
                  type="text"
                  required
                  placeholder="株式会社〇〇"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition"
                  style={{ focusRingColor: "#005BAC" } as React.CSSProperties}
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold mb-1"
                  style={{ color: "#02396B" }}
                >
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="山田 太郎"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold mb-1"
                  style={{ color: "#02396B" }}
                >
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="taro.yamada@company.co.jp"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold mb-1"
                  style={{ color: "#02396B" }}
                >
                  お問い合わせ内容
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="研修の詳細・費用・スケジュールなど、お気軽にご記入ください。"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full text-lg font-bold text-white shadow-md transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#F58220" }}
              >
                無料相談を申し込む
              </button>

              <p className="text-xs text-gray-400 text-center">
                ご入力いただいた個人情報は、お問い合わせへの対応にのみ使用いたします。
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
