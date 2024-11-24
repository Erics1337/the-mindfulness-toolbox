import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import FAQ from '@/components/FAQ';
import PricingTable from '@/components/PricingTable';

const programs = [
  {
    title: "School Integration Program",
    description: "A comprehensive program designed to integrate mindfulness practices into your school's daily routine.",
    features: [
      "Custom curriculum development",
      "Teacher training workshops",
      "Implementation support",
      "Progress tracking tools",
      "Parent resources"
    ],
    duration: "Full Academic Year",
    idealFor: "K-12 Schools",
    image: "/images/school-program.jpg",
    slug: "school-integration"
  },
  {
    title: "Studio Enrichment Program",
    description: "Perfect for yoga studios and wellness centers looking to expand their youth offerings.",
    features: [
      "Age-appropriate class plans",
      "Instructor certification",
      "Marketing materials",
      "Community engagement tools",
      "Ongoing support"
    ],
    duration: "6 Months",
    idealFor: "Yoga Studios & Wellness Centers",
    image: "/images/studio-program.jpg",
    slug: "studio-enrichment"
  },
  {
    title: "Summer Intensive",
    description: "An immersive summer program to kickstart mindfulness practice in your organization.",
    features: [
      "Daily practice sessions",
      "Staff training",
      "Resource materials",
      "Assessment tools",
      "Follow-up support"
    ],
    duration: "8 Weeks",
    idealFor: "Schools & Studios",
    image: "/images/summer-program.jpg",
    slug: "summer-intensive"
  }
];

const faqs = [
  {
    question: "How long does it take to implement the program?",
    answer: "Implementation typically takes 4-6 weeks, including initial training and setup. We provide ongoing support throughout the entire process."
  },
  {
    question: "What age groups are your programs suitable for?",
    answer: "Our programs are designed for students aged 5-18, with age-appropriate modifications and different approaches for each developmental stage."
  },
  {
    question: "Do you provide teacher training?",
    answer: "Yes, comprehensive teacher training is included in all our programs. We believe in empowering educators with the tools they need to effectively guide students."
  },
  {
    question: "How do you measure program success?",
    answer: "We use a combination of qualitative and quantitative metrics, including student surveys, teacher feedback, and behavioral assessments."
  }
];

export default function Programs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Your Space with Mindfulness
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Comprehensive programs designed to bring mindfulness and emotional wellness to schools and studios.
            </p>
            <Link
              href="#compare"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
            >
              Compare Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="compare" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Programs</h2>
            <p className="mt-4 text-xl text-gray-600">
              Choose the perfect program for your organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <Link
                key={program.title}
                href={`/programs/${program.slug}`}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-primary-500 transition-colors duration-200"
              >
                <div className="relative h-48">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mt-6">
                    <div>Duration: {program.duration}</div>
                    <div>Ideal for: {program.idealFor}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Pricing Plans</h2>
            <p className="mt-4 text-xl text-gray-600">
              Transparent pricing for every organization
            </p>
          </div>
          <PricingTable />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Everything you need to know about our programs
            </p>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Schedule a consultation to find the perfect program for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 transition-colors duration-200"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/resources/information-pack"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-primary-700 transition-colors duration-200"
                >
                  Download Information Pack
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
