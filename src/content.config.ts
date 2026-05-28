// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    category: z.enum(['academic', 'essay']),
    pdfUrl: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = { writing };