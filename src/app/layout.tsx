import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import Navbar from './components/Navbar'
import AuthProvider from './context/AuthProvider'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Providers } from './providers'
import CerrarSesion from './components/CerrarSesion'
import { GlobalContextProvider } from './context/GlobalContext'


const inter = Inter({ weight: ['200','300','400','500','700', '800'], subsets: ['latin'] })


export const metadata = {
  title: 'Surtymas',
  description: 'Tienda Online surtymas',
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
        <GlobalContextProvider>

            {/* <Navbar /> */}
            {/* <Nav >
              <CerrarSesion/>
            </Nav> */}
            {/* <main className="flex justify-center items-start p-6 min-h-screen"> */}
            <main >
              

                {children}
              
              {/* {children} */}
            </main>
            <Footer />
            </GlobalContextProvider>
            </Providers>
        </AuthProvider>
       
      </body>
    </html>
  )
}
