import React from 'react';
import { TrendingUp, Users, School, Award } from 'lucide-react';

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
          <h2 className="section-title">Our Impact</h2>
          <p className="section-subtitle">
            Making a difference in schools and communities across Colorado
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="card text-center">
              <stat.icon className="h-8 w-8 text-pink-500 mx-auto mb-4" />
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
          <a href="#case-studies" className="btn btn-primary">
            View Case Studies
          </a>
        </div>
      </div>
    </section>
  );
}