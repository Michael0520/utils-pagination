import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import PaginationControls from "@/components/PaginationControls"

const data = [
  "product 1",
  "product 2",
  "product 3",
  "product 4",
  "product 5",
  "product 6",
  "product 7",
  "product 8",
  "product 9",
  "product 10",
]

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const currentPage = searchParams["page"] ?? "1"
  const itemsPerPage = searchParams["per_page"] ?? "5"

  // mocked, skipped and limited in the real app
  const startIndex = (Number(currentPage) - 1) * Number(itemsPerPage) // 0, 5, 10 ...
  const endIndex = startIndex + Number(itemsPerPage) // 5, 10, 15 ...

  const productList = data.slice(startIndex, endIndex)

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
      {/* pagination example */}
      <div className="flex flex-col items-center gap-2">
        {productList.map((product) => (
          <p key={product}>{product}</p>
        ))}

        <PaginationControls
          hasNextPage={endIndex < data.length}
          hasPrevPage={startIndex > 0}
        />
      </div>
    </section>
  )
}
