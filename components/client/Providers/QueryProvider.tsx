"use client"

import { ReactNode, useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { queryClientOptions } from "@/config/constants"

interface QueryProvidersProp {
  children: ReactNode
}
const QueryProvider = ({ children }: QueryProvidersProp) => {
  const [queryClient] = useState(() => new QueryClient(queryClientOptions))
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default QueryProvider
