import Image from 'next/image'
import Link from 'next/link'

import { getProducts } from '@/api/get-products'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

export default async function Page() {
  const products = await getProducts()

  return (
    <main className="ml-auto flex min-h-[656px] w-full max-w-[calc(100vw-((100vw-1180px)/2))] pl-10">
      <Carousel className="w-full">
        <CarouselContent>
          {products.map((product) => {
            return (
              <CarouselItem key={product.id} className="basis-[696px] pr-12">
                <Link href={`product/${product.id}`} className="group flex">
                  <div className="relative flex aspect-square w-full shrink-0 items-end overflow-hidden rounded-lg bg-gradient-to-b from-[#1EA483] to-[#7465D4] p-1">
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
