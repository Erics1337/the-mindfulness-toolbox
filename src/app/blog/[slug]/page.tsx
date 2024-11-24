import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { getBlogPost } from '@/lib/contentful';
import { Metadata } from 'next';

export const revalidate = 3600; // Revalidate every hour

const richTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
      <p className="mb-4 text-gray-600 leading-relaxed">{children}</p>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => (
      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{children}</h3>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
      <ul className="list-disc pl-6 mb-4 text-gray-600">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => (
      <ol className="list-decimal pl-6 mb-4 text-gray-600">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => (
      <li className="mb-2">{children}</li>
    ),
    [BLOCKS.QUOTE]: (node: any, children: React.ReactNode) => (
      <blockquote className="border-l-4 border-primary-500 pl-4 my-4 italic text-gray-600">
        {children}
      </blockquote>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { title, file } = node.data.target.fields;
      return (
        <div className="my-8">
          <Image
            src={`https:${file.url}`}
            alt={title}
            width={800}
            height={400}
            className="rounded-lg"
          />
          {title && (
            <p className="text-sm text-gray-500 mt-2 text-center">{title}</p>
          )}
        </div>
      );
    },
    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-600 hover:text-primary-800 underline"
      >
        {children}
      </a>
    ),
  },
};

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | The Mindfulness Toolbox`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage(props: Props) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              {post.categories.map((category) => (
                <span
                  key={category.fields.slug}
                  className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800"
                >
                  {category.fields.name}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            <div className="flex items-center justify-center">
              <div className="relative h-12 w-12 rounded-full overflow-hidden">
                <Image
                  src={`https:${post.author.fields.avatar.fields.file.url}`}
                  alt={post.author.fields.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="ml-3 text-left">
                <p className="text-lg font-medium text-gray-900">
                  {post.author.fields.name}
                </p>
                <div className="text-gray-500">
                  {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  }).format(new Date(post.publishDate))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="relative h-96 max-w-6xl mx-auto -mt-20 shadow-xl rounded-xl overflow-hidden">
        <Image
          src={`https:${post.featuredImage.fields.file.url}`}
          alt={post.featuredImage.fields.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {documentToReactComponents(post.content, richTextOptions)}
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Share this article
            </h2>
            <div className="flex gap-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  post.title
                )}&url=${encodeURIComponent(
                  `https://mindfulnesstoolbox.com/blog/${post.slug}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600"
              >
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                  `https://mindfulnesstoolbox.com/blog/${post.slug}`
                )}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600"
              >
                LinkedIn
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  `https://mindfulnesstoolbox.com/blog/${post.slug}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
