import Link from "next/link";
import { cn } from "@/lib/utils";

interface BlogRowProps {
  href: string;
  image: string;
  title: string;
  subtitle: string;
  body: string;
  className?: string;
}

export function BlogRow({ href, image, title, subtitle, body, className }: BlogRowProps) {
  return (
    <Link href={href} className={cn("blog-row text-inherit no-underline", className)}>
      <div className="blog-row__img-wrap">
        <img src={image} alt="" />
      </div>
      <div className="blog-row__content">
        <div className="blog-row__text-group">
          <p className="blog-row__title">{title}</p>
          {subtitle ? <p className="blog-row__subtitle">{subtitle}</p> : null}
        </div>
        {body ? <p className="blog-row__body">{body}</p> : null}
        <p className="blog-row__cta">Continue Reading</p>
      </div>
    </Link>
  );
}

export default BlogRow;
