"use client"

import { FC } from "react"
import { useSearchParams } from "next/navigation"

import { Button } from "./ui/button"

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
}) => {
  const searchParams = useSearchParams()

  const page = searchParams.get("page") ?? "1"
  const per_page = searchParams.get("per_page") ?? "5"

  const handleClickToPrevPage = () => {}
  const handleClickToNextPage = () => {}

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
