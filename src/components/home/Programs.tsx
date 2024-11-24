import React from 'react';
import { Brain, Heart, Sparkles, Target } from 'lucide-react';
import Link from 'next/link';

const pillars = [
  {
    title: "Neuroscience",
    description: "Understanding how the brain works and develops",
    icon: Brain,
  },
  {
    title: "Mindful Awareness",
    description: "Practicing presence and attention",
    icon: Target,
  },
  {
    title: "Social-Emotional Learning",
    description: "Building emotional intelligence and relationships",
    icon: Heart,
  },
  {
    title: "Positive Psychology",
    description: "Fostering growth and resilience",
    icon: Sparkles,
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The power of mindfulness stems from four key pillars
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Our comprehensive approach combines proven methodologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div 
              key={pillar.title} 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
            >
              <pillar.icon className="h-10 w-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.description}</p>
              <div className="mt-4">
                <Link 
                  href={`/programs#${pillar.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-primary-500 font-medium hover:text-primary-600"
                >
                  Learn more +
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-white rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-8">Everything you need for district-wide impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-primary-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Curriculum Materials</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <div className="h-2 w-2 rounded-full bg-primary-500 mr-2" />
                  Full access to evidence-based curriculum
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="h-2 w-2 rounded-full bg-primary-500 mr-2" />
                  Age-appropriate activities and resources
                </li>
              </ul>
            </div>
            <div className="bg-primary-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Training and Support</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <div className="h-2 w-2 rounded-full bg-primary-500 mr-2" />
                  Professional development workshops
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="h-2 w-2 rounded-full bg-primary-500 mr-2" />
                  Ongoing implementation support
                </li>
              </ul>
            </div>
            <div className="bg-primary-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Digital Resources</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <div className="h-2 w-2 rounded-full bg-primary-500 mr-2" />
                  Online learning platform access
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="h-2 w-2 rounded-full bg-primary-500 mr-2" />
                  Downloadable materials and guides
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
