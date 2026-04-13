import { BlogRow } from "@/components/blocks/blog-row";
import { SectionHeader } from "@/components/common/section-header";
import { figmaAssets } from "@/content/images";
import { getPublishedBlogs } from "@/lib/data/blogs-public";
import { BLOG_FALLBACK_IMAGE } from "@/lib/blog/fallback-image";

export async function BlogSection() {
  const posts = await getPublishedBlogs({ take: 3 });

  return (
    <section className="blogs">
      <SectionHeader
        title="Latest Blogs"
        showViewAll
        viewAllHref="/blog"
        arrowSrc={figmaAssets.imgArrowRight3}
      />
      <div className="blogs__list">
        {posts.length === 0 ? (
          <p className="text-sm text-muted-foreground px-[var(--page-side)]">
            New posts will appear here when published.
          </p>
        ) : (
          posts.map((blog) => (
            <BlogRow
              key={blog.id}
              href={`/blog/${blog.slug}`}
              image={blog.coverImage ?? BLOG_FALLBACK_IMAGE}
              title={blog.title}
              subtitle={
                blog.publishedAt
                  ? new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(blog.publishedAt)
                  : ""
              }
              body={blog.excerpt ?? ""}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default BlogSection;
