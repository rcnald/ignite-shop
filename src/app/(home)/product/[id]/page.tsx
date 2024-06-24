import Image from 'next/image'

import { getProduct } from '@/api/get-product'
import { AddProductToCartButton } from '@/components/ui/product/add-product-to-cart-button'
import { formatProductPrice } from '@/lib/utils'

export interface PageParams {
  params: {
    id: string
  }
}

export default async function Page({ params }: PageParams) {
  const { id } = params

  const product = await getProduct({ id })

  const productPrice = formatProductPrice(product.price)

  return (
    <main className="mx-auto grid w-full max-w-[1180px] grid-cols-2 gap-20 p-10">
      <div className="relative flex aspect-square w-full shrink-0 items-end overflow-hidden rounded-lg bg-gradient-to-b from-[#1EA483] to-[#7465D4] p-1">
        <Image src={product.imageURL ?? ''} alt="" fill quality={100} />
      </div>
      <div className="flex h-full flex-col gap-14">
        <div className="flex flex-col gap-4 text-4xl">
          <h1 className="font-bold text-secondary-foreground">
            {product.name}
          </h1>
          <span className="text-primary-light">{productPrice}</span>
        </div>
        <p className="text-lg text-secondary-foreground">
          {product.description}
        </p>
        <AddProductToCartButton product={product} />
      </div>
    </main>
  )
}
