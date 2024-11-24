import React from 'react';

import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';

export default function About() {
  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <SectionHeader
        eyebrow="About Us"
        title="Transforming Young Lives Through Mindfulness"
        description="We're on a mission to bring evidence-based mindfulness education to schools and studios across the country."
        centered
      />

      {/* Mission Section */}
      <div className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                At The Mindfulness Toolbox, we believe that every child deserves the opportunity to develop essential life skills through mindfulness practice. Our curriculum is designed to foster emotional intelligence, reduce stress, and improve focus in students of all ages.
              </p>
              <div className="mt-6">
                <div className="space-y-4">
                  {missions.map((item) => (
                    <div key={item.name} className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                        <p className="mt-2 text-base text-gray-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/images/kid_feet_up_the_wall.jpg"
                  alt="Jane Smith, founder of The Mindfulness Toolbox"
                  fill
                  className="rounded-lg object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="mt-32 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Meet Our Founder
              </h2>
              <div className="mt-3 text-lg text-gray-500 space-y-4">
                <p>
                  Jane Smith brings over 15 years of experience in childhood education and mindfulness practice to The Mindfulness Toolbox. As a certified mindfulness instructor and former elementary school teacher, she understands firsthand the challenges and opportunities in bringing mindfulness to young people.
                </p>
                <p>
                  After witnessing the transformative effects of mindfulness practices on her students, Jane dedicated herself to developing a comprehensive curriculum that makes mindfulness accessible and engaging for children of all ages.
                </p>
                <p>
                  Her work has been recognized by Startup Colorado, and she regularly speaks at education conferences about the importance of mindfulness in schools.
                </p>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/images/jessica_mountains.jpg"
                  alt="Jane Smith, founder of The Mindfulness Toolbox"
                  fill
                  className="rounded-lg object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Values"
            title="What We Stand For"
            description="Our values guide everything we do, from curriculum development to program implementation."
            centered
          />
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <div key={value.name} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-primary-500 rounded-md shadow-lg">
                          <value.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{value.name}</h3>
                      <p className="mt-5 text-base text-gray-500">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const missions = [
  {
    name: 'Evidence-Based Approach',
    description: 'Our curriculum is grounded in scientific research and proven methodologies.',
    icon: ChartBarIcon,
  },
  {
    name: 'Inclusive Learning',
    description: 'Programs adapted for different age groups and learning styles.',
    icon: UsersIcon,
  },
  {
    name: 'Measurable Impact',
    description: 'Regular assessment and feedback to track student progress.',
    icon: CheckCircleIcon,
  },
];

const values = [
  {
    name: 'Authenticity',
    description: 'We believe in teaching mindfulness in a way that is genuine and relatable to children.',
    icon: HeartIcon,
  },
  {
    name: 'Innovation',
    description: 'Continuously improving our methods and adapting to modern educational needs.',
    icon: LightBulbIcon,
  },
  {
    name: 'Empowerment',
    description: 'Giving children the tools they need to manage emotions and build resilience.',
    icon: SparklesIcon,
  },
];

// Hero Icons
function ChartBarIcon(props: any) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

function UsersIcon(props: any) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function CheckCircleIcon(props: any) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function HeartIcon(props: any) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function LightBulbIcon(props: any) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}

function SparklesIcon(props: any) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}
