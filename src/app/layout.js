import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import "uikit/dist/css/uikit.min.css"
import "uikit/dist/js/uikit.js"
import "uikit/dist/js/uikit-icons.js"
import Head from 'next/head'
import Script from 'next/script'



const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({weight: "400", subsets: ["latin"] })
export const metadata = {
  title: 'Velvet Atlas App',
  description: 'Making Great Homes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
     
      </Head>
      
      <Script src="https://cdn.jsdelivr.net/npm/uikit@3.16.24/dist/js/uikit.min.js" onLoad={console.log("loaded")}></Script>
<Script src="https://cdn.jsdelivr.net/npm/uikit@3.16.24/dist/js/uikit-icons.min.js"></Script>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
