import type { Metadata } from 'next'
import Image from 'next/image'

import Logo from '@/assets/logo.svg'

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
      <header className="w-full max-w-[1180px]">
        <Image src={Logo} width={130} height={52} alt="" />
      </header>
      {children}
    </>
  )
}
