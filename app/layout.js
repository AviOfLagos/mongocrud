import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "./components/Navbar"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Practicing Mongo DB & CRUD Operations',
  description: 'Week 3 of picking on Next JS, Tailwind and frontend generally',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='max-w-3xl mx-auto p-4'>
          <Navbar />
          <div className='mt-6'>
            {children}
          </div>
        </div>
        </body>
    </html>
  )
}
