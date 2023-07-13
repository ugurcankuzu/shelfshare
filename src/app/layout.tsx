import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ShelfShare | Your library, amplified by ShelfShare.',
  description: 'Your library, amplified by ShelfShare.',
  icons:{
    icon: "/favicon.png",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-dark-brown"}>{children}</body>
    </html>
  )
}
