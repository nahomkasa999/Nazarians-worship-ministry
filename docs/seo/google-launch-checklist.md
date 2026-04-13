# Google Launch Checklist

## Before launch
- Set `NEXT_PUBLIC_SITE_URL` to production domain in deployment environment.
- Deploy latest build and verify `https` is active.
- Confirm `https://your-domain.com/robots.txt` is accessible.
- Confirm `https://your-domain.com/sitemap.xml` is accessible and includes blog + teaching URLs.
- Validate a sample blog page and teaching page metadata using browser page source.

## Search Console setup
1. Open [Google Search Console](https://search.google.com/search-console/about).
2. Add property for your production domain.
3. Verify ownership (DNS recommended).
4. Submit sitemap URL: `https://your-domain.com/sitemap.xml`.

## Immediate post-launch checks (week 1)
- Use URL Inspection for homepage, one blog post, and one teaching page; request indexing.
- Check Pages/Indexing report for blocked or excluded URLs.
- Fix any `noindex`, `404`, or canonical mismatch warnings.

## Monitoring cadence (weeks 2-6)
- Weekly: review top queries and top pages in Performance report.
- Improve titles/meta descriptions for pages with high impressions but low CTR.
- Publish at least one keyword-targeted blog post per week.
- Add internal links from new posts to `/courses` and relevant teaching pages.

## Success indicators
- Pages are indexed and searchable by brand + topic.
- Blog impressions and clicks increase week-over-week.
- Queries related to singing, worship ministry, and Ethiopia begin to surface in Search Console.
