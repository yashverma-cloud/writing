import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

/**
 * Content rules (src/content/writing/_contract.md): every fact comes from the portfolio,
 * a published note or Yash. Nothing is invented.
 */

/**
 * Only published entries reach the site. With none, the list shows its empty state and carries
 * noindex (README.md). `_`-prefixed files are excluded because the content-layer loader, unlike
 * page routing, does not skip them on its own — `_contract.md` lives in that folder as the brief
 * for whoever writes the posts, and without this it would be read as a post and fail the schema.
 */
const writing = defineCollection({
  loader: glob({ base: './src/content/writing', pattern: ['**/*.md', '!**/_*.md'] }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** Full 'YYYY-MM-DD': BlogPosting's datePublished needs a real date, not a partial one. */
    published: z.string(),
    /** Only when a post is materially revised; becomes dateModified. */
    updated: z.string().optional(),
    /**
     * Note the default: `false` here, `true` for `work`. A post with no `draft` key
     * publishes as soon as it is saved, which is why the writing contract always states it.
     */
    draft: z.boolean().default(false),
    /** A note is short and dated, read in one go; an article is long form with headings. */
    kind: z.enum(['note', 'article']).default('article'),
  }),
});

export const collections = { writing };
