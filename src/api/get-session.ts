import type { Stripe } from 'stripe'

import { stripe } from '@/lib/stipe'

export async function getSession(id: string | undefined) {
  if (!id) return

  try {
    const session = await stripe.checkout.sessions.retrieve(id, {
      expand: ['line_items', 'line_items.data.price.product'],
    })

    const sessionProductsData = session.line_items?.data.reduce(
      (sessionItemAccumulator, sessionCurrentItem) => {
        const product = sessionCurrentItem.price?.product as Stripe.Product
        const images = Array.from({
          length: sessionCurrentItem.quantity ?? 0,
        }).map(() => product.images[0])

        return {
          amount:
            sessionItemAccumulator.amount + (sessionCurrentItem.quantity ?? 0),
          images: [...sessionItemAccumulator.images, ...images],
        }
      },
      { amount: 0, images: [''] },
    )

    return {
      customerName: session.customer_details?.name,
      totalProducts: sessionProductsData?.amount ?? 0,
      productImages: sessionProductsData?.images,
    }
  } catch {}
}
