'use client'

import Link from 'next/link'
import { useShoppingCart } from 'use-shopping-cart'

import { Button } from '../../button'

export function ReturnHomeButton() {
  const { clearCart } = useShoppingCart()
  return (
    <Link href="/" className="mx-auto w-fit text-center">
      <Button variant="link" onClick={clearCart} className="text-xl font-bold">
        Voltar ao catálogo
      </Button>
    </Link>
  )
}
