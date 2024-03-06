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
    <div className="flex items-center justify-center gap-3">
      <button
        className={`${btn} bg-brand text-[12px] text-white`}
        onClick={() => onFetch(pageNumber - 1)}
        disabled={pageNumber === 1}
      >
        <ChevronLeft />
        <span>Prev</span>
      </button>

      <div className={`${btn} bg-shade text-[12px]`}>
        {pageNumber} / {totalPage}
      </div>

      <button
        disabled={pageNumber === totalPage}
        onClick={() => onFetch(pageNumber + 1)}
        className={`${btn} bg-brand text-[12px] text-white`}
      >
        <span>Next</span>
        <ChevronRight />
      </button>
    </div>
  );
}
