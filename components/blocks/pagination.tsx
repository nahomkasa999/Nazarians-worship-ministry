import { cn } from "@/lib/utils";

interface PaginationProps {
  arrowLeftSrc: string;
  dotsSrc: string;
  arrowRightSrc: string;
  className?: string;
}

export function Pagination({
  arrowLeftSrc,
  dotsSrc,
  arrowRightSrc,
  className,
}: PaginationProps) {
  return (
    <div className={cn("pagination", className)}>
      <button className="pagination__arrow pagination__arrow--left">
        <img src={arrowLeftSrc} alt="Previous" />
      </button>
      <img src={dotsSrc} alt="Page indicators" className="pagination__dots" />
      <button className="pagination__arrow">
        <img src={arrowRightSrc} alt="Next" />
      </button>
    </div>
  );
}

export default Pagination;
