import { z } from "zod"

export const contactFormSchema = z.object({
  company: z
    .string()
    .min(1, "会社名を入力してください")
    .max(200, "会社名は200文字以内で入力してください"),
  name: z
    .string()
    .min(1, "お名前を入力してください")
    .max(100, "お名前は100文字以内で入力してください"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  message: z
    .string()
    .max(5000, "お問い合わせ内容は5000文字以内で入力してください")
    .optional(),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
