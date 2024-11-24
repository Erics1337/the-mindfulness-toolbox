import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight, Clock, Users, BookOpen, ChartBar } from 'lucide-react';

const implementationSteps = [
  {
    title: "Initial Consultation",
    description: "We begin with a thorough assessment of your organization's needs and goals.",
    duration: "1-2 weeks",
    icon: Users,
    details: [
      "Understand your organization's culture and values",
      "Identify key stakeholders and champions",
      "Define success metrics and outcomes",
      "Review available resources and constraints",
      "Create preliminary timeline"
    ]
  },
  {
    title: "Program Customization",
    description: "Tailoring our curriculum and materials to your specific context.",
    duration: "2-3 weeks",
    icon: BookOpen,
    details: [
      "Adapt curriculum to age groups and setting",
      "Develop custom materials and resources",
      "Create implementation schedule",
      "Design assessment tools",
      "Prepare staff training materials"
    ]
  },
  {
    title: "Staff Training",
    description: "Comprehensive training for teachers and staff members.",
    duration: "1-2 weeks",
    icon: Users,
    details: [
      "Core mindfulness practices training",
      "Age-appropriate teaching techniques",
      "Classroom management strategies",
      "Crisis intervention protocols",
      "Program assessment methods"
    ]
  },
  {
    title: "Pilot Implementation",
    description: "Initial rollout with selected groups to refine approach.",
    duration: "4-6 weeks",
    icon: ChartBar,
    details: [
      "Select pilot groups",
      "Implement initial programs",
      "Gather feedback and data",
      "Make necessary adjustments",
      "Prepare for full implementation"
    ]
  }
];

const Timeline = ({ steps }: { steps: typeof implementationSteps }) => (
  <div className="relative">
    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-100" />
    <div className="space-y-12">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <div key={step.title} className="relative">
            <div className="flex items-center">
              <div className="flex-1 text-right pr-8 md:pr-12">
                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-gray-600 mt-1">{step.description}</p>
                <div className="flex items-center justify-end mt-2 text-primary-600">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">{step.duration}</span>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <div className="flex-1 pl-8 md:pl-12">
                <ul className="space-y-2">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-start">
                      <Check className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default function Implementation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Implementation Process
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A structured approach to bringing mindfulness to your organization
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Timeline steps={implementationSteps} />
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Ongoing Support & Resources
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              We're with you every step of the way
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Technical Support
              </h3>
              <p className="text-gray-600 mb-4">
                Access to our support team for quick resolution of any technical issues or questions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">24/7 email support</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Regular check-in calls</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Online knowledge base</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Resource Library
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive collection of materials, guides, and templates.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Lesson plans & activities</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Assessment tools</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Parent resources</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Community Access
              </h3>
              <p className="text-gray-600 mb-4">
                Connect with other organizations implementing mindfulness programs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Online community forum</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Monthly webinars</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Success stories & case studies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Let's discuss how we can bring mindfulness to your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 transition-colors duration-200"
                >
                  Schedule a Consultation
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
