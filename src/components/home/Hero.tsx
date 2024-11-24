import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const benefits = [
    "Evidence-based curriculum",
    "Professional development included",
    "Startup Colorado partner",
    "Proven results"
  ];

  return (
    <div className="relative bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-600 mb-6">
              <span className="text-sm font-medium">Trusted by 50+ Schools</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Science-powered solutions for mindful learning
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Evidence-based curriculum and resources that promote understanding of mindfulness, giving students and educators strategies for improved focus, emotional regulation, and joy.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-500 mr-2" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/programs"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                View Programs
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] relative">
              <Image
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80"
                alt="Children practicing mindfulness"
                fill
                className="rounded-3xl object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <p className="text-sm font-medium text-gray-600">Trusted by</p>
              <p className="text-4xl font-bold text-primary-500">50+</p>
              <p className="text-sm text-gray-600">Schools Nationwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
