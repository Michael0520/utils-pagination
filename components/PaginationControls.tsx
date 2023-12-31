"use client"

import { FC } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "./ui/button"

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
  totalSize: number
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
  totalSize,
}) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get("page") ?? "1"
  const per_page = searchParams.get("per_page") ?? "5"

  const handleClickToPrevPage = () => {
    router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`)
  }
  const handleClickToNextPage = () => {
    router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`)
  }

  return (
    <div className="flex items-center justify-center gap-4">
      <Button
        className="bg-blue-500 p-2 text-white"
        disabled={!hasPrevPage}
        onClick={handleClickToPrevPage}
      >
        <ChevronLeft className="h-5 w-5" />
        <span className="sr-only">First page</span>
      </Button>

      <div>
        {page} / {Math.ceil(totalSize / Number(per_page))}
      </div>

      <Button
        className="bg-blue-500 p-2 text-white"
        disabled={!hasNextPage}
        onClick={handleClickToNextPage}
      >
        <ChevronRight className="h-5 w-5" />
        <span className="sr-only">First page</span>
      </Button>
    </div>
  )
}

export default PaginationControls
