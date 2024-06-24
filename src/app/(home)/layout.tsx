import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/assets/logo.svg'
import { Cart } from '@/components/ui/cart'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <header className="mx-auto flex w-full max-w-[1180px] justify-between p-10">
        <Link href="/">
          <Image src={Logo} width={130} height={52} alt="" />
        </Link>
        <Cart />
      </header>
      {children}
    </>
  )
}
