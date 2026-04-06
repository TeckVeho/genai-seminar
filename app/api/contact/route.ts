import { NextResponse } from "next/server"
import { Resend } from "resend"

import { contactFormSchema } from "@/lib/contact-schema"

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { error: "メール送信の設定が完了していません。" },
      { status: 500 }
    )
  }

  const to = process.env.CONTACT_TO_EMAIL
  if (!to) {
    return NextResponse.json(
      { error: "受信メールアドレスの設定が完了していません。" },
      { status: 500 }
    )
  }

  const from = process.env.CONTACT_FROM_EMAIL
  if (!from) {
    return NextResponse.json(
      { error: "送信元メールアドレスの設定が完了していません。" },
      { status: 500 }
    )
  }

  let json: unknown
  try {
    json = await request.json()
  } catch {
    return NextResponse.json({ error: "リクエストの形式が正しくありません。" }, { status: 400 })
  }

  const parsed = contactFormSchema.safeParse(json)
  if (!parsed.success) {
    const first = parsed.error.flatten().fieldErrors
    const msg =
      Object.values(first).flat()[0] ?? "入力内容を確認してください。"
    return NextResponse.json({ error: msg }, { status: 400 })
  }

  const { company, name, email, message } = parsed.data
  const messageText = (message ?? "").trim() || "（未入力）"

  const html = `
    <p><strong>会社名</strong><br />${escapeHtml(company)}</p>
    <p><strong>お名前</strong><br />${escapeHtml(name)}</p>
    <p><strong>メールアドレス</strong><br />${escapeHtml(email)}</p>
    <p><strong>お問い合わせ内容</strong><br />${escapeHtml(messageText).replace(/\n/g, "<br />")}</p>
  `

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `【サイトお問い合わせ】${company} / ${name}`,
    html,
  })

  if (error) {
    console.error("[contact] Resend error:", error)
    return NextResponse.json(
      { error: "送信に失敗しました。時間をおいて再度お試しください。" },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}
