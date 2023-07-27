"use client"

import { Button } from "./ui/button"

const PaginationControls = () => {
  return (
    <div className="flex w-full items-center justify-center gap-4">
      <Button>Prev</Button>
      <div>pages</div>
      <Button>Next</Button>
    </div>
  )
}

export default PaginationControls
