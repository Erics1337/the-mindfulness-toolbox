'use client';

import React from 'react';
import { Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "The Mindfulness Toolbox has transformed our school's approach to emotional wellness. Our students are more focused and emotionally aware.",
    author: "Sarah Johnson",
    role: "Elementary School Principal",
    image: "/images/testimonials/principal.jpg"
  },
  {
    quote: "As a yoga studio owner, partnering with The Mindfulness Toolbox has helped us expand our youth programs significantly.",
    author: "Michael Chen",
    role: "Studio Owner",
    image: "/images/testimonials/studio-owner.jpg"
  },
  {
    quote: "The curriculum is engaging and age-appropriate. Our teachers have noticed improved classroom behavior and concentration.",
    author: "Lisa Martinez",
    role: "School District Administrator",
    image: "/images/testimonials/administrator.jpg"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What People Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Trusted by educators and wellness professionals nationwide
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-sm">
                    <Quote className="h-10 w-10 text-primary-500 mb-6" />
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center">
                      <div className="relative h-14 w-14">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <p className="font-bold text-lg">
                          {testimonial.author}
                        </p>
                        <p className="text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors duration-200 ${
                  index === activeIndex ? 'bg-primary-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
