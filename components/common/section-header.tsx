import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Divider } from "./divider";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  showViewAll?: boolean;
  /** When set with `showViewAll`, "VIEW ALL" links here (e.g. `/courses`). */
  viewAllHref?: string;
  className?: string;
}

export function SectionHeader({
  title,
  showViewAll = false,
  viewAllHref,
  className,
}: SectionHeaderProps) {
  const viewAllButton = (
    <>
      <span>VIEW ALL</span>
      <ChevronRightIcon className="btn__icon" aria-hidden="true" />
    </>
  );

  return (
    <div className={cn("section-header", className)}>
      <Divider />
      <div className="section-header__inner">
        <h2 className="section-header__title">{title}</h2>
        {showViewAll && viewAllHref ? (
          <Button className="btn btn--outline btn--view-all" asChild>
            <Link href={viewAllHref}>{viewAllButton}</Link>
          </Button>
        ) : showViewAll ? (
          <Button className="btn btn--outline btn--view-all">{viewAllButton}</Button>
        ) : null}
      </div>
    </div>
  );
}

export default SectionHeader;
