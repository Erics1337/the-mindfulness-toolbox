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
    order: ['-fields.publishDate'] as const,
  });

  return response.items.map((item) => {
    const fields = item.fields;
    return {
      title: fields.title as string,
      slug: fields.slug as string,
      featuredImage: fields.featuredImage,
      excerpt: fields.excerpt as string,
      content: fields.content,
      author: fields.author,
      publishDate: fields.publishDate as string,
      categories: fields.categories
    } as BlogPost;
  });
}

export async function getBlogPost(slug: string) {
  const response = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
  });

  const item = response.items[0];
  if (!item) return null;

  return {
    title: item.fields.title as string,
    slug: item.fields.slug as string,
    featuredImage: item.fields.featuredImage,
    excerpt: item.fields.excerpt as string,
    content: item.fields.content,
    author: item.fields.author,
    publishDate: item.fields.publishDate as string,
    categories: item.fields.categories
  } as BlogPost;
}

export async function getBlogCategories() {
  const response = await client.getEntries({
    content_type: 'category',
  });

  return response.items.map((item) => ({
    ...item.fields,
  }));
}

export async function getProgram(slug: string) {
  // This is a local implementation since we don't have a real Contentful source for programs
  const programs = {
    'school-integration': {
      title: "School Integration Program",
      subtitle: "Transform your school with comprehensive mindfulness education",
      description: "A full-year program designed to seamlessly integrate mindfulness practices into your school's daily routine, creating a more focused and emotionally balanced learning environment.",
      image: "/images/school-program.jpg",
      duration: "Full Academic Year",
      participants: "Entire School",
      startDates: "August & January",
      features: [
        "Custom curriculum development aligned with educational standards",
        "Comprehensive teacher training and certification",
        "Parent education workshops and resources",
        "Progress tracking and assessment tools",
        "Regular consultation and support sessions"
      ],
      curriculum: [
        {
          title: "Foundation Phase",
          duration: "2 months",
          description: "Establish core mindfulness concepts and basic practices"
        }
      ],
      testimonial: {
        quote: "This program has transformed our school's approach to student well-being.",
        author: "Jane Doe",
        role: "School Principal"
      }
    }
  };

  return programs[slug as keyof typeof programs] || null;
}
