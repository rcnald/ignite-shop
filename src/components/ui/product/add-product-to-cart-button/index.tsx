'use client'

import { useShoppingCart } from 'use-shopping-cart'

import { ProductType } from '@/api/get-product'
import { Button } from '@/components/ui/button'

export interface AddProductToCartButtonProps {
  product: ProductType
}

export function AddProductToCartButton({
  product,
}: AddProductToCartButtonProps) {
  const { addItem } = useShoppingCart()

  return (
    <Button
      className="mt-auto h-16 py-5 text-lg font-bold"
      onClick={() => addItem(product)}
    >
      Colocar na sacola
    </Button>
  )
}
