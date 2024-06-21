import './globals.css'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import { cn } from '@/lib/utils'

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: { template: '%s | Ignite - Shop', default: 'Ignite - Shop' },
  description: 'O único e-commerce com as melhores camisas da Rocketseat!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          'flex min-h-screen flex-col items-center justify-center gap-[2rem] bg-background py-10 pl-[2rem] md:max-xl:pl-[8.5rem] xl:pl-0',
          roboto.className,
        )}
      >
        {children}
      </body>
    </html>
  )
}
