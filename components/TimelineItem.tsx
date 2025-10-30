import React from 'react';
import type { WorkExperience } from '../types';

interface TimelineItemProps {
  experience: WorkExperience;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ experience }) => {
  return (
    <div className="relative">
      <div className="absolute -left-[43px] top-1 h-4 w-4 rounded-full bg-earth-accent ring-8 ring-earth-bg"></div>
      <div className="pl-4">
        <p className="text-sm text-earth-accent font-semibold">{experience.period}</p>
        <h4 className="text-xl font-bold text-earth-dark mt-1">{experience.role} - <span className="font-normal">{experience.kitchen}</span></h4>
        <p className="text-base font-medium text-earth-text">{experience.company}, {experience.location}</p>
        <ul className="mt-2 list-disc list-inside space-y-1 text-base text-earth-text/80">
          {experience.responsibilities.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineItem;