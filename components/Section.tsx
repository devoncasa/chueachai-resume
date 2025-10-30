import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section>
      <h3 className="text-3xl font-serif font-bold text-earth-dark mb-5 pb-3 border-b-2 border-earth-accent/50">
        {title}
      </h3>
      <div className="text-base text-earth-text/90">
        {children}
      </div>
    </section>
  );
};

export default Section;