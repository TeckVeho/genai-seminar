"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Send } from "lucide-react"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  type ContactFormValues,
  contactFormSchema,
} from "@/lib/contact-schema"

const inputClassName =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm transition focus-visible:ring-brand-primary"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      company: "",
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(data: ContactFormValues) {
    setServerError(null)
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    const payload = (await res.json().catch(() => ({}))) as {
      error?: string
    }

    if (!res.ok) {
      setServerError(
        payload.error ?? "送信に失敗しました。時間をおいて再度お試しください。"
      )
      return
    }

    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="section-y section-x bg-brand-light-gray"
    >
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-fluid-section mb-4 font-bold text-brand-secondary">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-fluid-lead mx-auto max-w-2xl text-gray-600">
            助成金の一般的な説明・開催形式のご提案まで対応いたします。研修内容・費用など、どんな小さなご質問でもお気軽にどうぞ。
            <br />
            通常2営業日以内にご返信いたします。
          </p>
          <p className="mt-6 text-sm text-gray-600">
            <span className="font-semibold text-brand-secondary">連絡先</span>{" "}
            <a
              href="tel:0352178988"
              className="text-brand-primary underline underline-offset-2 hover:opacity-80"
            >
              TEL：03-5217-8988
            </a>{" "}
            <span className="text-gray-400">／</span>{" "}
            <a
              href="mailto:hikota@d-dxlab.com?subject=%E7%89%A9%E6%B5%81%E4%BC%81%E6%A5%AD%E7%89%B9%E5%8C%96AI%E4%BA%BA%E6%9D%90%E8%82%B2%E6%88%90%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"
              className="text-brand-primary underline underline-offset-2 hover:opacity-80"
            >
              MAIL：hikota@d-dxlab.com
            </a>
          </p>
        </div>

        <div className="mx-auto max-w-2xl rounded-xl bg-white p-4 shadow-soft md:p-8 lg:p-12">
          {submitted ? (
            <div className="py-8 text-center">
              <div className="mb-4 flex justify-center text-6xl text-brand-primary">
                <Send size={64} />
              </div>
              <h3 className="text-fluid-heading-lg mb-2 font-bold text-brand-secondary">
                お問い合わせを受け付けました
              </h3>
              <p className="text-fluid-body text-gray-600">
                通常2営業日以内にご連絡いたします。しばらくお待ちください。
              </p>
            </div>
          ) : (
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
              noValidate
            >
              {serverError ? (
                <p
                  className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                  role="alert"
                >
                  {serverError}
                </p>
              ) : null}

              <div>
                <label
                  htmlFor="company"
                  className="mb-1 block text-sm font-bold text-brand-secondary"
                >
                  会社名 <span className="text-red-500">*</span>
                </label>
                <Input
                  id="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="株式会社〇〇"
                  className={inputClassName}
                  aria-invalid={!!form.formState.errors.company}
                  {...form.register("company")}
                />
                {form.formState.errors.company ? (
                  <p className="mt-1 text-sm text-red-600">
                    {form.formState.errors.company.message}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-bold text-brand-secondary"
                >
                  お名前 <span className="text-red-500">*</span>
                </label>
                <Input
                  id="name"
                  type="text"
                  autoComplete="name"
                  placeholder="山田 太郎"
                  className={inputClassName}
                  aria-invalid={!!form.formState.errors.name}
                  {...form.register("name")}
                />
                {form.formState.errors.name ? (
                  <p className="mt-1 text-sm text-red-600">
                    {form.formState.errors.name.message}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-bold text-brand-secondary"
                >
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="taro.yamada@company.co.jp"
                  className={inputClassName}
                  aria-invalid={!!form.formState.errors.email}
                  {...form.register("email")}
                />
                {form.formState.errors.email ? (
                  <p className="mt-1 text-sm text-red-600">
                    {form.formState.errors.email.message}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-bold text-brand-secondary"
                >
                  お問い合わせ内容
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="研修の詳細・費用・スケジュールなど、お気軽にご記入ください。"
                  className={`${inputClassName} min-h-[120px] resize-none`}
                  aria-invalid={!!form.formState.errors.message}
                  {...form.register("message")}
                />
                {form.formState.errors.message ? (
                  <p className="mt-1 text-sm text-red-600">
                    {form.formState.errors.message.message}
                  </p>
                ) : null}
              </div>

              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="text-fluid-lead h-auto w-full rounded-full bg-brand-accent py-4 font-bold text-white shadow-soft hover:opacity-90"
              >
                {form.formState.isSubmitting
                  ? "送信中..."
                  : "無料相談を申し込む"}
              </Button>

              <p className="text-center text-xs text-gray-400">
                ご入力いただいた個人情報は、お問い合わせへの対応にのみ使用いたします。
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
