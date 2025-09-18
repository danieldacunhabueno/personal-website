import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    date: z.date(),
    tags: z.array(z.string()).default([])
  })
});

export const collections = { blog };
