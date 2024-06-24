import { env } from '@/env'
import { stripe } from '@/lib/stipe'

export interface lineItemsType {
  price: string
  quantity: number
}

export interface CreateSessionParams {
  items: lineItemsType[]
}

export async function createSession({ items }: CreateSessionParams) {
  const session = stripe.checkout.sessions.create({
    success_url: `${env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${env.NEXT_PUBLIC_URL}/cancel`,
    mode: 'payment',
    line_items: items,
  })

  return session
}
