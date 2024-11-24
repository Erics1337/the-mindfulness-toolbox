import React from 'react';
import { Users, Calendar, Clock, Star } from 'lucide-react';
import Link from 'next/link';

const programs = [
  {
    title: "Break Series",
    description: "Short mindfulness sessions integrated into the school day",
    features: [
      "5-15 minute guided sessions",
      "Easy classroom integration",
      "Grade-specific content",
      "Teacher training included"
    ],
    icon: Clock,
    color: "bg-blue-50 hover:bg-blue-100"
  },
  {
    title: "After School Program",
    description: "Comprehensive mindfulness and yoga curriculum",
    features: [
      "45-60 minute sessions",
      "Weekly programs",
      "Take-home materials",
      "Parent workshops"
    ],
    icon: Calendar,
    color: "bg-green-50 hover:bg-green-100"
  },
  {
    title: "Kids Yoga Party",
    description: "Fun, engaging mindfulness events",
    features: [
      "60-90 minute sessions",
      "Theme customization",
      "Group activities",
      "Take-home practice guides"
    ],
    icon: Star,
    color: "bg-purple-50 hover:bg-purple-100"
  },
  {
    title: "District-Wide Implementation",
    description: "Full-scale mindfulness program rollout",
    features: [
      "Curriculum alignment",
      "Staff development",
      "Progress tracking",
      "Ongoing support"
    ],
    icon: Users,
    color: "bg-orange-50 hover:bg-orange-100"
  }
];

export default function ProgramTypes() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Flexible Programs for Every Need
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Customizable solutions for schools, studios, and organizations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <div 
              key={program.title} 
              className={`rounded-2xl p-8 transition-colors duration-200 ${program.color} border border-gray-100`}
            >
              <div className="flex items-start">
                <program.icon className="h-8 w-8 text-primary-500 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/programs/${program.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center justify-center px-6 py-3 mt-6 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
