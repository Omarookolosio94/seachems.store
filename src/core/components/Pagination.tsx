import { btn } from "core/consts/styling";
import { ChevronLeft, ChevronRight } from "react-feather";

interface Props {
  pageSize?: number;
  pageNumber?: number;
  totalCount?: number;
  totalPage?: number;
  onFetch?: any;
}

export default function Pagination({
  pageNumber = 1,
  totalCount = 0,
  totalPage = 0,
  onFetch = () => {},
}: Props) {
  return (
    <div className="sm:w-2/3 lg:w-1/2 w-full flex items-center justify-center gap-3">
      <button
        className={`${btn} !w-1/3 bg-brand text-[12px] text-white`}
        onClick={() => onFetch(pageNumber - 1)}
        disabled={pageNumber === 1}
      >
        <ChevronLeft />
        <span>Prev</span>
      </button>

      <div className={`${btn} !w-1/3 bg-shade text-[12px]`}>
        {pageNumber} / {totalPage}
      </div>

      <button
        disabled={pageNumber === totalPage}
        onClick={() => onFetch(pageNumber + 1)}
        className={`${btn} bg-brand !w-1/3 text-[12px] text-white`}
      >
        <span>Next</span>
        <ChevronRight />
      </button>
    </div>
  );
}
