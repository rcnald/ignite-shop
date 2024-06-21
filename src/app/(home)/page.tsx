import Image from 'next/image'
import Link from 'next/link'
import { Stripe } from 'stripe'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { stripe } from '@/lib/stipe'

export default async function Page() {
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

  return (
    <main className="ml-auto flex min-h-[656px] w-full max-w-[calc(100vw-((100vw-1180px)/2))]">
      <Carousel opts={{}} className="w-full">
        <CarouselContent>
          {products.map((product) => {
            return (
              <CarouselItem className="basis-[696px] pr-12">
                <Link href={`product/${product.id}`} className="group flex">
                  <div
                    key={product.id}
                    className="relative flex aspect-square w-full shrink-0 items-end overflow-hidden rounded-lg bg-gradient-to-b from-[#1EA483] to-[#7465D4] p-1"
                  >
                    <Image src={product.imageURL} alt="" fill quality={100} />

                    <div className="w-full translate-y-[110%] overflow-hidden rounded-md bg-secondary/90 p-5 font-bold opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100">
                      <h1 className="text-xl">{product.name}</h1>
                      <span className="text-2xl text-primary-light">
                        {product.price}
                      </span>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
    </main>
  )
}
