import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const query = new QueryClient()
export const QueryProvider = ({ children }) => {
  return <QueryClientProvider client={query}>{children}</QueryClientProvider>
}
