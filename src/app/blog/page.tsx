import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogPosts, getBlogCategories } from '@/lib/contentful';

export const revalidate = 3600; // Revalidate every hour

async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getBlogPosts(),
    getBlogCategories(),
  ]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mindfulness Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Insights, tips, and stories about mindfulness education and its impact
              on young minds
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-8">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:border-primary-500 transition-colors duration-200"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <div className="relative h-48">
                        <Image
                          src={`https:${post.featuredImage.fields.file.url}`}
                          alt={post.featuredImage.fields.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          {post.categories.map((category) => (
                            <span
                              key={category.fields.slug}
                              className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800"
                            >
                              {category.fields.name}
                            </span>
                          ))}
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center">
                          <div className="relative h-10 w-10 rounded-full overflow-hidden">
                            <Image
                              src={`https:${post.author.fields.avatar.fields.file.url}`}
                              alt={post.author.fields.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">
                              {post.author.fields.name}
                            </p>
                            <div className="text-sm text-gray-500">
                              {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              }).format(new Date(post.publishDate))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Categories
                </h2>
                <nav className="space-y-2">
                  {categories.map((category: any) => (
                    <Link
                      key={category.slug}
                      href={`/blog/category/${category.slug}`}
                      className="block px-4 py-2 rounded-md hover:bg-primary-50 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      {category.name}
                    </Link>
                  ))}
                </nav>

                <div className="mt-12">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Subscribe to Our Newsletter
                  </h2>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-gray-600 mb-4">
                      Get the latest mindfulness education insights delivered to
                      your inbox.
                    </p>
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="email" className="sr-only">
                          Email address
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                          placeholder="Enter your email"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;
