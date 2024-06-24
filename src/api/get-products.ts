import type Stripe from 'stripe'

import { stripe } from '@/lib/stipe'

export async function getProducts() {
  const productsResponse = (
    await stripe.products.list({
      expand: ['data.default_price'],
    })
  ).data

  const products = productsResponse.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageURL: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format((price.unit_amount ?? 0) / 100),
    }
  })

  return products
}
