import React from 'react';
import { Users, Calendar, Clock, Star } from 'lucide-react';

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
    color: "bg-blue-50"
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
    color: "bg-green-50"
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
    color: "bg-purple-50"
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
    color: "bg-orange-50"
  }
];

export default function ProgramTypes() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Flexible Programs for Every Need</h2>
          <p className="section-subtitle">
            Customizable solutions for schools, studios, and organizations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <div key={program.title} className={`card ${program.color} border border-gray-100`}>
              <div className="flex items-start">
                <program.icon className="h-8 w-8 text-pink-500 mt-1" />
                <div className="ml-4">
                  <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <div className="h-1.5 w-1.5 rounded-full bg-pink-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="btn btn-primary mt-6">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}