import { Roboto } from 'next/font/google'
import './globals.css'
import Header from "@/components/layout/Header";


const roboto = Roboto({ subsets: ['latin'], weight:['400','500', '700'] })

export const metadata = {
  title: 'Planet Pizza',
  description: 'A maior e mais completa da cidade',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
      <main className="max-w-4xl mx-auto p-5">
          <Header />
          {children}
          <footer className="border-t p-8 text-center text-purple-700 mt-16">
              &copy; 2024 todos os direitos reservados
          </footer>
      </main>
      </body>
    </html>
  )
}
