/* 
Next.js uses the App component to initialize pages. You can override it and control the page initialization and:
  - Create a shared layout between page changes
  - Inject additional data into pages
  - Add global CSS

https://nextjs.org/docs/pages/building-your-application/routing/custom-app
*/

import { AppProps } from 'next/app'
import RootLayout from './layout'
import { StrictMode } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <StrictMode>
        <Component {...pageProps} />
      </StrictMode>
    </RootLayout>
  )
}

export default MyApp
