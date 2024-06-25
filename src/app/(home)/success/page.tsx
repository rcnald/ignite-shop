import Image from 'next/image'
import { redirect } from 'next/navigation'

import { getSession } from '@/api/get-session'
import { ReturnHomeButton } from '@/components/ui/success/return-home-button'

export interface PageParams {
  searchParams: { session_id: string | undefined }
}

export default async function Page({ searchParams }: PageParams) {
  const sessionId = searchParams.session_id

  const sessionData = await getSession(sessionId)

  if (!sessionData) {
    redirect('/')
  }
  return (
    <main className="flex flex-col justify-center gap-14">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(0px,75px))] place-content-center">
        {sessionData?.productImages?.map((image, index) => {
          if (image !== '') {
            return (
              <Image
                src={image}
                alt=""
                key={`image-${index}`}
                width={130}
                height={130}
                className="min-w-[130px] -translate-x-1/4 rounded-full bg-gradient-to-b from-[#1EA483] to-[#7465D4] shadow-xl"
              />
            )
          }

          return null
        })}
      </div>
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold text-primary-foreground">
          Compra efetuada!
        </h1>
        <p className="text-2xl text-muted-foreground">
          Uhuul <span className="font-bold">{sessionData?.customerName}</span>,
          sua compra de <span>{sessionData?.totalProducts}</span> camisetas já
          está a caminho da sua casa.
        </p>
      </div>
      <ReturnHomeButton />
    </main>
  )
}
