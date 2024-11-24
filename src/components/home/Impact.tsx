import React from 'react';
import { TrendingUp, Users, School, Award } from 'lucide-react';
import Link from 'next/link';

const stats = [
  {
    label: "Students Impacted",
    value: "10,000+",
    icon: Users,
    description: "Across multiple school districts"
  },
  {
    label: "Partner Schools",
    value: "50+",
    icon: School,
    description: "From K-8 institutions"
  },
  {
    label: "Success Rate",
    value: "94%",
    icon: TrendingUp,
    description: "Program satisfaction"
  },
  {
    label: "Recognition",
    value: "2024",
    icon: Award,
    description: "Startup Colorado Partner"
  }
];

export default function Impact() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Impact
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Making a difference in schools and communities across Colorado
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.label} 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
            >
              <stat.icon className="h-8 w-8 text-primary-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-1">
                {stat.label}
              </div>
              <div className="text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/case-studies"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
          >
            View Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
