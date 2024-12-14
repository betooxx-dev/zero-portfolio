import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'betooxx.dev',
  description: 'Portafolio de Alberto Avendaño',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
