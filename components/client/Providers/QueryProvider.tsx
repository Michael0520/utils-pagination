"use client"

import { ReactNode } from "react"

interface QueryProvidersProp {
  children: ReactNode
}
const QueryProvider = ({ children }: QueryProvidersProp) => {
  return <div>{children}</div>
}

export default QueryProvider
