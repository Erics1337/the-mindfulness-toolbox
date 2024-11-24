import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Clock, Users, Calendar } from 'lucide-react';
import { notFound } from 'next/navigation';

const programs = {
  'school-integration': {
    title: "School Integration Program",
    subtitle: "Transform your school with comprehensive mindfulness education",
    description: "A full-year program designed to seamlessly integrate mindfulness practices into your school's daily routine, creating a more focused and emotionally balanced learning environment.",
    image: "/images/school-program.jpg",
    duration: "Full Academic Year",
    participants: "Entire School",
    startDates: "August & January",
    features: [
      "Custom curriculum development aligned with educational standards",
      "Comprehensive teacher training and certification",
      "Parent education workshops and resources",
      "Progress tracking and assessment tools",
      "Regular consultation and support sessions"
    ],
    curriculum: [
      {
        title: "Foundation Phase",
        duration: "2 months",
        description: "Establish core mindfulness concepts and basic practices"
      },
      {
        title: "Integration Phase",
        duration: "6 months",
        description: "Implement daily mindfulness practices and emotional awareness exercises"
      },
      {
        title: "Sustainability Phase",
        duration: "4 months",
        description: "Ensure long-term program success and staff independence"
      }
    ],
    testimonial: {
      quote: "The School Integration Program has transformed our learning environment. Our students are more focused, and teachers report significant improvements in classroom behavior.",
      author: "Sarah Johnson",
      role: "Principal, Lincoln Elementary"
    }
  },
  'studio-enrichment': {
    title: "Studio Enrichment Program",
    subtitle: "Expand your studio's impact with youth mindfulness programs",
    description: "A six-month program designed to help yoga studios and wellness centers develop and launch successful youth mindfulness programs.",
    image: "/images/studio-program.jpg",
    duration: "6 Months",
    participants: "Up to 5 Instructors",
    startDates: "Quarterly",
    features: [
      "Age-appropriate class plans and sequences",
      "Instructor training and certification",
      "Marketing materials and launch support",
      "Community engagement strategies",
      "Ongoing mentorship and guidance"
    ],
    curriculum: [
      {
        title: "Program Development",
        duration: "2 months",
        description: "Create your studio's unique youth mindfulness offering"
      },
      {
        title: "Implementation",
        duration: "3 months",
        description: "Launch and refine your youth programs"
      },
      {
        title: "Growth Strategy",
        duration: "1 month",
        description: "Develop plans for program expansion and community impact"
      }
    ],
    testimonial: {
      quote: "This program gave us everything we needed to successfully launch youth classes. The response from our community has been overwhelming.",
      author: "Michael Chen",
      role: "Owner, Mindful Movement Studio"
    }
  },
  'summer-intensive': {
    title: "Summer Intensive Program",
    subtitle: "Kickstart mindfulness practice with an immersive summer experience",
    description: "An 8-week intensive program perfect for schools and studios looking to launch mindfulness initiatives during the summer break.",
    image: "/images/summer-program.jpg",
    duration: "8 Weeks",
    participants: "Flexible",
    startDates: "June & July",
    features: [
      "Daily practice sessions and workshops",
      "Comprehensive staff training",
      "Program materials and resources",
      "Implementation planning support",
      "Post-program consultation"
    ],
    curriculum: [
      {
        title: "Foundations",
        duration: "2 weeks",
        description: "Build fundamental mindfulness skills and knowledge"
      },
      {
        title: "Deep Practice",
        duration: "4 weeks",
        description: "Intensive mindfulness training and implementation"
      },
      {
        title: "Integration",
        duration: "2 weeks",
        description: "Create action plans for ongoing practice"
      }
    ],
    testimonial: {
      quote: "The Summer Intensive was the perfect way to prepare our team for implementing mindfulness programs. We started the school year with confidence and clarity.",
      author: "David Martinez",
      role: "Program Director, Wellness Academy"
    }
  }
};

export default function ProgramPage({ params }: { params: { slug: string } }) {
  const program = programs[params.slug as keyof typeof programs];

  if (!program) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {program.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">{program.subtitle}</p>
              <p className="text-gray-600 mb-8">{program.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary-500 mr-2" />
                  <span className="text-gray-600">{program.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-primary-500 mr-2" />
                  <span className="text-gray-600">{program.participants}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-primary-500 mr-2" />
                  <span className="text-gray-600">{program.startDates}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/resources/information-pack"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50"
                >
                  Download Info Pack
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Program Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {program.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start bg-white p-6 rounded-lg shadow-sm"
              >
                <Check className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                <p className="text-gray-600">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Program Curriculum
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {program.curriculum.map((phase) => (
              <div
                key={phase.title}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {phase.title}
                </h3>
                <p className="text-primary-600 font-medium mb-4">
                  {phase.duration}
                </p>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-600 rounded-2xl p-12 relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-2xl text-white mb-6 font-medium italic">
                "{program.testimonial.quote}"
              </p>
              <div>
                <p className="text-white font-bold">{program.testimonial.author}</p>
                <p className="text-primary-200">{program.testimonial.role}</p>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full -mr-32 -mt-32 opacity-50" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-700 rounded-full -ml-32 -mb-32 opacity-50" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the growing community of schools and studios bringing mindfulness to their spaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50"
            >
              Compare All Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
