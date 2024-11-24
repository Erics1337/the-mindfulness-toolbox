import React from 'react';
import { Check } from 'lucide-react';
import Link from 'next/link';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: {
    text: string;
    href: string;
  };
  highlighted?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "Basic",
    price: "$2,999",
    description: "Perfect for small studios starting their mindfulness journey",
    features: [
      "Up to 2 instructors",
      "Basic curriculum materials",
      "Email support",
      "Monthly check-ins",
      "Basic progress tracking"
    ],
    cta: {
      text: "Get Started",
      href: "/contact?plan=basic"
    }
  },
  {
    name: "Professional",
    price: "$4,999",
    description: "Ideal for established studios and small schools",
    features: [
      "Up to 5 instructors",
      "Complete curriculum package",
      "Priority email & phone support",
      "Weekly check-ins",
      "Advanced progress tracking",
      "Parent resources",
      "Marketing materials"
    ],
    cta: {
      text: "Get Started",
      href: "/contact?plan=professional"
    },
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large schools and multi-location organizations",
    features: [
      "Unlimited instructors",
      "Custom curriculum development",
      "24/7 dedicated support",
      "On-site training",
      "Custom reporting",
      "Parent & community resources",
      "Custom marketing materials",
      "Program adaptation rights"
    ],
    cta: {
      text: "Contact Us",
      href: "/contact?plan=enterprise"
    }
  }
];

export default function PricingTable() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className={`relative rounded-2xl ${
            tier.highlighted
              ? 'bg-primary-600 text-white shadow-xl scale-105'
              : 'bg-white text-gray-900 border border-gray-200'
          }`}
        >
          {tier.highlighted && (
            <div className="absolute -top-5 left-0 right-0 flex justify-center">
              <div className="bg-primary-500 text-white text-sm font-medium px-4 py-1 rounded-full">
                Most Popular
              </div>
            </div>
          )}
          <div className="p-8">
            <h3 className="text-2xl font-bold">{tier.name}</h3>
            <p
              className={`mt-4 text-3xl font-bold ${
                tier.highlighted ? 'text-white' : 'text-gray-900'
              }`}
            >
              {tier.price}
            </p>
            <p
              className={`mt-2 text-sm ${
                tier.highlighted ? 'text-primary-100' : 'text-gray-500'
              }`}
            >
              per program
            </p>
            <p
              className={`mt-4 ${
                tier.highlighted ? 'text-primary-100' : 'text-gray-500'
              }`}
            >
              {tier.description}
            </p>
            <ul className="mt-8 space-y-4">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check
                    className={`h-5 w-5 ${
                      tier.highlighted ? 'text-primary-200' : 'text-primary-500'
                    } mr-2 flex-shrink-0`}
                  />
                  <span
                    className={
                      tier.highlighted ? 'text-primary-100' : 'text-gray-600'
                    }
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href={tier.cta.href}
                className={`block w-full text-center px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  tier.highlighted
                    ? 'bg-white text-primary-600 hover:bg-primary-50'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                {tier.cta.text}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
