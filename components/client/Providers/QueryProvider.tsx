"use client"

import { ReactNode } from "react"

interface QueryProvidersProps {
  children: ReactNode
}
const QueryProviders = ({ children }: QueryProvidersProps) => {
  return <div>{children}</div>
}

export default QueryProviders
