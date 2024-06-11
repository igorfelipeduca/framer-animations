import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "@radix-ui/themes/styles.css"
import { Theme } from "@radix-ui/themes"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Framer Animations | Igor Duca",
  description: "Framer Motion animations for Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <Header />

          {children}
        </Theme>
      </body>
    </html>
  )
}
