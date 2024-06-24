'use client'

import axios from 'axios'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart'

import { lineItemsType } from '@/api/create-session'
import { env } from '@/env'
import { cn, formatProductPrice } from '@/lib/utils'

import { Button } from '../button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../dialog'
import { CartItem } from './cart-item'

export interface ProductCartItem {
  id: string
  name: string
  imageURL: string | undefined
  price: number
}

export function Cart() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cartDetails, cartCount, totalPrice, removeItem } = useShoppingCart()
  const navigate = useRouter()

  const cartItems: ProductCartItem[] = Object.entries(cartDetails ?? {}).map(
    (cartEntry) => {
      return {
        name: cartEntry[1].name,
        id: cartEntry[1].id,
        price: cartEntry[1].price,
        imageURL: cartEntry[1].imageURL,
      }
    },
  )

  const cartLineItems: lineItemsType[] = Object.entries(cartDetails ?? {}).map(
    (cartEntry) => {
      return {
        price: cartEntry[1].priceId,
        quantity: cartEntry[1].quantity,
      }
    },
  )

  const isCartEmpty = cartItems.length === 0

  const handleCheckout = async () => {
    const { data } = await axios.post(
      `${env.NEXT_PUBLIC_URL}/api/create-session`,
      {
        lineItems: cartLineItems,
      },
    )

    navigate.push(data.sessionURL)
  }

  const closeCart = () => {
    setIsCartOpen(false)
  }

  return (
    <Dialog open={isCartOpen} onOpenChange={setIsCartOpen}>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          data-items-count={cartCount}
          className={cn(
            'relative aspect-square h-auto p-4 after:absolute after:right-0 after:top-0 after:flex after:size-8 after:-translate-y-1/4 after:translate-x-1/4 after:items-center after:justify-center after:rounded-full after:border-[3px] after:border-solid after:border-background after:bg-primary after:text-sm after:font-bold after:content-[attr(data-items-count)]',
            { 'after:hidden': cartCount === 0 },
          )}
        >
          <ShoppingBag />
          <span className="sr-only">Sacola de compras</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="data-[state=closed]:slide-out-from-left left-auto right-0 top-0 h-screen gap-8 bg-card pt-16 data-[state=closed]:duration-75 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:slide-in-from-right">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-primary-foreground">
            Sacola de compras
          </DialogTitle>
        </DialogHeader>

        <ul className="h-full w-full space-y-6 has-[a]:flex has-[a]:items-center has-[a]:justify-center">
          {!isCartEmpty ? (
            cartItems.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  product={item}
                  onRemove={() => removeItem(item.id)}
                />
              )
            })
          ) : (
            <Link href="/">
              <Button
                variant="link"
                onClick={closeCart}
                className="text-2xl font-bold"
              >
                Nenhum item na sacola
              </Button>
            </Link>
          )}
        </ul>

        <DialogFooter className="mt-auto w-full gap-14 sm:flex-col">
          <table className="flex w-full justify-between">
            <thead>
              <tr className="flex flex-col gap-2 text-lg">
                <th className="p-0 text-start font-normal">Quantidade</th>
                <th className="p-0 text-start font-bold">Valor total</th>
              </tr>
            </thead>
            <tbody className="flex">
              <tr className="flex flex-col gap-2 text-lg">
                <td className="text-end text-secondary-foreground">
                  {cartCount} item(s)
                </td>
                <td className="text-end text-2xl font-bold text-primary-foreground">
                  {formatProductPrice(totalPrice ?? 0)}
                </td>
              </tr>
            </tbody>
          </table>

          <Button
            disabled={isCartEmpty}
            onClick={handleCheckout}
            className="h-auto py-5 text-lg font-bold"
          >
            Finalizar compra
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
