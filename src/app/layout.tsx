import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import Navbar from './components/Navbar'
import AuthProvider from './context/AuthProvider'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Providers } from './providers'
import CerrarSesion from './components/CerrarSesion'


const inter = Inter({ weight: ['200','300','400','500','700', '800'], subsets: ['latin'] })


export const metadata = {
  title: 'NextAuth Tutorial',
  description: 'Learn NextAuth.js by Dave Gray',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <AuthProvider>
        <Providers>
          

            {/* <Navbar /> */}
            <Nav >
              <CerrarSesion/>
            </Nav>
            {/* <main className="flex justify-center items-start p-6 min-h-screen"> */}
            <main >
              {children}
            </main>
            <Footer />
            </Providers>
        </AuthProvider>
       
      </body>
    </html>
  )
}
