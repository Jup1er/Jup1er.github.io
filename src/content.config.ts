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
    pdfUrl: z.string().optional(), // 可选：留给不想写网页版的学术论文
  }),
});

export const collections = { writing };