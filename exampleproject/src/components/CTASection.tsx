import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-pink-500 to-peach-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to bring mindfulness to your school?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the growing community of schools and studios transforming young lives through mindfulness and emotional wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="btn btn-secondary">
              Download Information Pack
            </button>
          </div>
          <p className="mt-6 text-gray-600">
            Questions? Call us at (555) 123-4567
          </p>
        </div>
      </div>
    </section>
  );
}