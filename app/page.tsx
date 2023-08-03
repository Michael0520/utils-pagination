import Image from "next/image"

import PaginationControls from "@/components/PaginationControls"

const getPicture = async () => {
  const res = await fetch(`https://picsum.photos/v2/list`)
  return res.json()
}

type productDetail = {
  id: string
  author: string
  width: number
  height: number
  url: string
  download_url: string
}

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const currentPage = searchParams["page"] ?? "1"
  const itemsPerPage = searchParams["per_page"] ?? "5"

  // mocked, skipped and limited in the real app
  const startIndex = (Number(currentPage) - 1) * Number(itemsPerPage) // 0, 5, 10 ...
  const endIndex = startIndex + Number(itemsPerPage) // 5, 10, 15 ...

  const rawData = await getPicture()
  const artistData = await getPicture().then((res) => {
    return res.slice(startIndex, endIndex)
  })

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Utils pagination <br className="hidden sm:inline" />
          easily build pagination for prev & next page function
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>
      {/* pagination example */}
      <div className="flex flex-col items-center gap-2">
        {artistData.map((product: productDetail) => (
          <div
            key={product.id}
            className="w-112 mb-4 flex flex-col items-center rounded-md bg-white p-4 shadow-md"
          >
            <p className="mb-2 flex w-full items-center justify-between text-slate-700">
              <span>ID: {Number(product.id) + 1}</span>
              <span>Name: {product.author}</span>
            </p>
            <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-md">
              <Image
                src={product.download_url}
                alt="image"
                width={500}
                height={Math.round((500 / product.width) * product.height)}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}

        <PaginationControls
          hasNextPage={endIndex < rawData.length}
          hasPrevPage={startIndex > 0}
          totalSize={rawData.length}
        />
      </div>
    </section>
  )
}
