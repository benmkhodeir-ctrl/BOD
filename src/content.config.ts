import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    standfirst: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    format: z.enum(['article', 'field-note']),
    series: z.enum(['the-last-inch', 'the-process-broke-here', 'general']).default('general'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    status: z.enum(['prototype', 'published']).default('published'),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    heroCaption: z.string().optional(),
    discussion: z.object({
      linkedin: z.string().url().optional(),
      facebook: z.string().url().optional(),
      x: z.string().url().optional()
    }).optional(),
    contactPrompt: z.enum(['commercial', 'general', 'none']).default('general')
  })
});

export const collections = { writing };
