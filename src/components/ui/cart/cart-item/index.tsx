import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { formatProductPrice } from '@/lib/utils'

import type { ProductCartItem } from '..'

export interface CartItemProps {
  onRemove: () => void
  product: ProductCartItem
}

export function CartItem({ product, onRemove }: CartItemProps) {
  return (
    <li className="flex list-none gap-5">
      <Image
        src={product.imageURL ?? ''}
        alt=""
        width={95}
        height={95}
        className="rounded-lg bg-gradient-to-b from-[#1EA483] to-[#7465D4]"
      />
      <div>
        <div>
          <h1 className="text-lg text-muted-foreground">{product.name}</h1>
          <p className="text-lg font-bold text-primary-foreground">
            {formatProductPrice(product.price)}
          </p>
        </div>
        <Button
          variant="ghost"
          onClick={onRemove}
          className="h-auto p-0 font-bold text-primary"
        >
          Remover
        </Button>
      </div>
    </li>
  )
}
