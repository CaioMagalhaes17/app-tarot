import { Button } from "@app/ui";
import { SetURLSearchParams } from "react-router-dom";

export function Pagination({ pages, currentPage, setSearchParams }: { pages: number, currentPage: number, setSearchParams: SetURLSearchParams }) {
  return (
    <>
      <div className="flex flex-row gap-2 justify-end mr-5 ">
        {[...Array(pages)].map((_, index) => (
          <>
            <Button onClick={() => setSearchParams({ page: String(index + 1) })} className={`${index + 1 === currentPage ? 'btn-primary' : 'btn-outline-primary'} `}>{index + 1}</Button>
          </>
        ))}
      </div>
    </>
  )
}