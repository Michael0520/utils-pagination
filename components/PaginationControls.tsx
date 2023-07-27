"use client"

import { FC } from "react"
import { useRouter, useSearchParams } from "next/navigation"

import { Button } from "./ui/button"

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
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
    <div className="flex gap-4">
      <Button
        className="bg-blue-500 p-1 text-white"
        disabled={!hasPrevPage}
        onClick={handleClickToPrevPage}
      >
        prev page
      </Button>

      <div>
        {page} / {Math.ceil(10 / Number(per_page))}
      </div>

      <Button
        className="bg-blue-500 p-1 text-white"
        disabled={!hasNextPage}
        onClick={handleClickToNextPage}
      >
        next page
      </Button>
    </div>
  )
}

export default PaginationControls
