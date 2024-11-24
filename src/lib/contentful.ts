import { createClient } from 'contentful';

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export interface BlogPost {
  title: string;
  slug: string;
  featuredImage: {
    fields: {
      file: {
        url: string;
      };
      title: string;
    };
  };
  excerpt: string;
  content: any;
  author: {
    fields: {
      name: string;
      avatar: {
        fields: {
          file: {
            url: string;
          };
        };
      };
    };
  };
  publishDate: string;
  categories: Array<{ fields: { name: string; slug: string } }>;
}

export async function getBlogPosts() {
  const response = await client.getEntries({
    content_type: 'blogPost',
    order: '-fields.publishDate',
  });

  return response.items.map((item) => ({
    ...item.fields,
  })) as BlogPost[];
}

export async function getBlogPost(slug: string) {
  const response = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
  });

  return response.items[0]?.fields as BlogPost;
}

export async function getBlogCategories() {
  const response = await client.getEntries({
    content_type: 'category',
  });

  return response.items.map((item) => ({
    ...item.fields,
  }));
}
