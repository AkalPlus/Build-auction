'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools/build/lib/devtools'
import { useState } from 'react'

export const QueryProvider = ({ children }) => {
  const [query] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={query}>
      <ReactQueryDevtools initialIsOpen={false} />

      {children}
    </QueryClientProvider>
  )
}
