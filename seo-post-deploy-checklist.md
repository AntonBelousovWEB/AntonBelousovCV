# SEO Post-Deploy Checklist

Run this after every production deploy.

## 1. Verify Live URLs

- `https://anton-belousov-cv.vercel.app/`
- `https://anton-belousov-cv.vercel.app/blog`
- `https://anton-belousov-cv.vercel.app/sitemap.xml`
- `https://anton-belousov-cv.vercel.app/rss.xml`
- `https://anton-belousov-cv.vercel.app/4f8f7d8c5c2f4e9eb1f0a3c2d6e7b809.txt`
- `https://anton-belousov-cv.vercel.app/blog/topics/senior-frontend-developer`
- `https://anton-belousov-cv.vercel.app/blog/topics/react-architecture`
- `https://anton-belousov-cv.vercel.app/blog/topics/javascript`
- `https://anton-belousov-cv.vercel.app/blog/topics/typescript`
- `https://anton-belousov-cv.vercel.app/blog/topics/technical-seo`

## 2. Notify IndexNow

Run:

```bash
npm run indexnow
```

Only run this after the key file is live.

## 3. Google Search Console

Submit or inspect:

- `/`
- `/blog`
- `/blog/topics/senior-frontend-developer`
- `/blog/topics/react-architecture`
- `/blog/topics/javascript`
- `/blog/topics/typescript`
- `/blog/topics/technical-seo`
- Top 5 updated articles.

Submit sitemap:

```text
https://anton-belousov-cv.vercel.app/sitemap.xml
```

## 4. Bing Webmaster Tools

- Submit sitemap.
- Check IndexNow status.
- Submit topic hub URLs manually if needed.

## 5. Weekly Measurement

Update `seo-weekly-tracking.csv` from:

- Google Search Console performance report.
- Google Search Console indexing report.
- Bing Webmaster Tools.
- DataForSEO only every 2 weeks after indexing.
