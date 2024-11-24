'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  className?: string;
}

export default function FAQ({ items, className = '' }: FAQProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <div
          key={item.question}
          className="bg-white rounded-lg shadow-sm overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 flex justify-between items-center text-left"
          >
            <h3 className="text-lg font-medium text-gray-900">
              {item.question}
            </h3>
            <ChevronDown
              className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                openIndex === index ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`px-6 transition-all duration-200 ease-in-out ${
              openIndex === index ? 'py-4' : 'py-0 h-0'
            }`}
          >
            <p className="text-gray-600">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
