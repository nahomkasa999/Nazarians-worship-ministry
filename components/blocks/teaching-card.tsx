import Image from "next/image";
import Link from "next/link";
import { teachingDescriptionPreview } from "@/lib/teaching-description";
import { cn } from "@/lib/utils";
import { fallbackThumbnailUrl } from "@/lib/youtube/parse-id";

export type TeachingCardProps = {
  id: string;
  youtubeId: string;
  thumbnailUrl: string | null;
  title: string;
  semester?: string | null;
  meeting?: string | null;
  location?: string | null;
  description?: string | null;
  href: string;
  durationLabel?: string | null;
  className?: string;
};

export function TeachingCard({
  youtubeId,
  thumbnailUrl,
  title,
  semester,
  meeting,
  location,
  description,
  href,
  durationLabel,
  className,
}: TeachingCardProps) {
  const imgSrc = thumbnailUrl?.trim() || fallbackThumbnailUrl(youtubeId);
  const descriptionPreview = teachingDescriptionPreview(description);

  return (
    <Link href={href} className={cn("block h-full", className)}>
      <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border/80 bg-card shadow-sm">
      <div className="relative aspect-video w-full shrink-0 bg-muted">
        <Image
          src={imgSrc}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="teaching-card__body flex flex-1 flex-col gap-3 p-4 text-left">
        <div className="teaching-card__meta space-y-1">
          <p className="teaching-card__title font-bold uppercase leading-tight tracking-tight text-foreground">
            {title}
          </p>
          {durationLabel ? (
            <p className="text-xs font-medium text-muted-foreground">Length: {durationLabel}</p>
          ) : null}
          {semester ? (
            <p className="teaching-card__semester text-sm text-muted-foreground">{semester}</p>
          ) : null}
        </div>
        {(meeting || location) && (
          <div className="teaching-card__schedule space-y-0.5 text-sm font-bold text-foreground">
            {meeting ? <p>{meeting}</p> : null}
            {location ? <p>{location}</p> : null}
          </div>
        )}
        {descriptionPreview ? (
          <p className="teaching-card__desc line-clamp-4 flex-1 text-sm leading-relaxed text-foreground">
            {descriptionPreview}
          </p>
        ) : null}
        <span className="sr-only">Open teaching</span>
      </div>
      </article>
    </Link>
  );
}

export default TeachingCard;
