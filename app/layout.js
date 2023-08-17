'use client'

import { ChakraProvider } from '@chakra-ui/react'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{backgroundColor: '#2b2b2b'}}>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
}
