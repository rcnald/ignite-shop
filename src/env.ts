import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_KEY: z.string(),
  SECRET_API_KEY: z.string(),
})

export const env = envSchema.parse(process.env)
