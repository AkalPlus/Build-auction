// import { Inter } from "next/font/google";
import { Lato } from 'next/font/google'
import './globals.css'
import { QueryProvider } from '@/app/providers/queryProvider'
import { CustomTooltipProvider } from '@/app/providers/tooltipProvider'

const lato = Lato({
  subsets: ['latin'],
  fontDisplay: 'swap',
  weight: ['100', '300', '400', '700', '900'],
})

export const metadata = {
  title: 'Build Auction',
  description: 'One stop shop for all your construction needs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <CustomTooltipProvider>
          <QueryProvider>{children}</QueryProvider>
        </CustomTooltipProvider>
      </body>
    </html>
  )
}
