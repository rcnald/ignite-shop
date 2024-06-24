import './globals.css'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import { CartProvider } from '@/contexts/cart-provider'
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
          'flex min-h-screen flex-col items-center justify-center gap-[2rem] bg-background',
          roboto.className,
        )}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
