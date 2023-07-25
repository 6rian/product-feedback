import '@/styles/index.scss'
import type { Metadata } from 'next'
import { Jost } from 'next/font/google'

const jost = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Frontend Mentor Feedback Board',
  description: 'Product feedback app challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  )
}
