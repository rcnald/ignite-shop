import { redirect } from 'next/navigation'
import Stripe from 'stripe'

import { stripe } from '@/lib/stipe'

export interface ProductType {
  id: string
  name: string
  description: string | undefined
  imageURL: string | undefined
  currency: string
  price: number
  priceId?: string
}

export interface GetProductParams {
  id: string
}

export async function getProduct({ id }: GetProductParams) {
  try {
    const productResponse = await stripe.products.retrieve(id, {
      expand: ['default_price'],
    })

    const price = productResponse.default_price as Stripe.Price

    const product: ProductType = {
      id: productResponse.id,
      name: productResponse.name,
      description: productResponse.description ?? undefined,
      imageURL: productResponse.images[0],
      currency: 'BRL',
      price: price.unit_amount ?? 0,
      priceId: price.id,
    }

    return product
  } catch {
    return redirect('/')
  }
}
