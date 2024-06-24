'use client'

import { PropsWithChildren } from 'react'
import { CartProvider as StripeCartProvider } from 'use-shopping-cart'

import { env } from '@/env'

export function CartProvider({ children }: PropsWithChildren) {
  return (
    <StripeCartProvider
      mode="payment"
      cartMode="client-only"
      stripe={env.NEXT_PUBLIC_API_KEY}
      successUrl="https://stripe.com"
      cancelUrl="https://twitter.com/rcnald"
      currency="BRL"
      allowedCountries={['BR']}
      billingAddressCollection={true}
      shouldPersist
    >
      {children}
    </StripeCartProvider>
  )
}
