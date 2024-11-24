import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <h2 className="text-base font-semibold tracking-wide uppercase text-primary-600">
          {eyebrow}
        </h2>
      )}
      <p className={`mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl ${centered ? 'mx-auto' : ''}`}>
        {title}
      </p>
      {description && (
        <p className={`mt-4 text-xl text-gray-500 ${centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
