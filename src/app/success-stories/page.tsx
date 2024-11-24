import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Users, Heart } from 'lucide-react';

const metrics = [
  { label: 'Students Impacted', value: '2,500+' },
  { label: 'Partner Organizations', value: '50+' },
  { label: 'Average Satisfaction', value: '4.9/5' },
  { label: 'Program Success Rate', value: '95%' },
];

const testimonials = [
  {
    quote: "The Mindfulness Toolbox has transformed how we approach youth wellness. Their structured program and ongoing support made implementation seamless.",
    author: "Sarah Chen",
    role: "Program Director",
    organization: "Thrive Yoga Studio"
  },
  {
    quote: "Our students are more focused, emotionally aware, and better equipped to handle daily challenges. The results have exceeded our expectations.",
    author: "Michael Rodriguez",
    role: "School Principal",
    organization: "Riverside Elementary"
  },
  {
    quote: "The customization options and expert guidance helped us create a program that perfectly fits our community's needs.",
    author: "Dr. Emily Watson",
    role: "Wellness Coordinator",
    organization: "Mindful Youth Center"
  }
];

const CaseStudy = () => (
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
    <div className="relative h-96">
      <Image
        src="/images/children_practicing_mindfulness.jpg"
        alt="Children practicing mindfulness at Thrive4Kids"
        fill
        className="object-cover"
      />
    </div>
    <div className="p-8">
      <div className="flex items-center gap-4 mb-6">
        <Image
          src="/images/thrive4kids-class.png"
          alt="Thrive Yoga Studio Logo"
          width={60}
          height={60}
          className="rounded-full"
        />
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Thrive4Kids</h3>
          <p className="text-gray-600">Crested Butte, Colorado</p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          Thrive4Kids partnered with The Mindfulness Toolbox to expand their children's mindfulness
          programming from weekly classes to a comprehensive youth development program. The
          collaboration resulted in a structured yet flexible curriculum that serves various age
          groups while maintaining intimate class sizes and high-quality instruction.
        </p>

        <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Achievements</h4>
        <ul className="space-y-3">
          <li className="flex items-start">
            <Star className="h-6 w-6 text-primary-500 mr-2 flex-shrink-0" />
            <span>Expanded from weekly classes to daily programming</span>
          </li>
          <li className="flex items-start">
            <TrendingUp className="h-6 w-6 text-primary-500 mr-2 flex-shrink-0" />
            <span>Increased student engagement by 200%</span>
          </li>
          <li className="flex items-start">
            <Users className="h-6 w-6 text-primary-500 mr-2 flex-shrink-0" />
            <span>Maintained optimal student-to-teacher ratios</span>
          </li>
          <li className="flex items-start">
            <Heart className="h-6 w-6 text-primary-500 mr-2 flex-shrink-0" />
            <span>95% parent satisfaction rate</span>
          </li>
        </ul>

        <div className="mt-8">
          <h4 className="text-xl font-semibold text-gray-900 mb-4">Program Overview</h4>
          <p className="text-gray-600 mb-4">
            Thrive4Kids implements a variety of mindfulness-based curricula to encourage creativity,
            social-emotional learning, and confidence in each student. The program focuses on developing:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Self-awareness and emotional intelligence</li>
            <li>Body management and mindful movement</li>
            <li>Interpersonal skills and social connection</li>
            <li>Stress management and coping strategies</li>
            <li>Creative expression and personal growth</li>
          </ul>
        </div>

        <div className="mt-8">
          <h4 className="text-xl font-semibold text-gray-900 mb-4">Implementation Approach</h4>
          <p className="text-gray-600 mb-4">
            Working with The Mindfulness Toolbox, Thrive4Kids developed a flexible, drop-in format
            that accommodates varying schedules while maintaining program quality. The implementation
            included:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Age-appropriate curriculum development</li>
            <li>Staff training and certification</li>
            <li>Safety protocols and guidelines</li>
            <li>Parent communication systems</li>
            <li>Progress tracking and assessment tools</li>
          </ul>
        </div>

        <blockquote className="border-l-4 border-primary-500 pl-4 my-8 italic">
          "We are committed to supporting mindfulness development in children and teens because we
          know that healthier, spirited youth make happier, wholesome adults. The Mindfulness
          Toolbox helped us turn this vision into reality."
          <footer className="text-gray-600 mt-2 not-italic">
            - Jessica Thompson, Founder of Thrive Yoga Studio
          </footer>
        </blockquote>
      </div>
    </div>
  </div>
);

export default function SuccessStories() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from organizations that have transformed their communities
              through mindfulness education
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-3xl font-bold text-primary-600">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600 mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Success Story</h2>
            <p className="mt-4 text-xl text-gray-600">
              How Thrive Yoga Studio revolutionized youth mindfulness programming
            </p>
          </div>
          <CaseStudy />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              What Our Partners Say
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Hear from organizations that have implemented our programs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="flex-1">
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <div className="mt-4">
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600">
                      {testimonial.role}, {testimonial.organization}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Join these organizations in transforming your community through mindfulness education.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 transition-colors duration-200"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/implementation"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-primary-700 transition-colors duration-200"
                >
                  Learn About Implementation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
