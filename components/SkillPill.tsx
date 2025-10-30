import React from 'react';

interface SkillPillProps {
  skill: string;
}

const SkillPill: React.FC<SkillPillProps> = ({ skill }) => {
  return (
    <span className="bg-earth-main/50 text-earth-dark text-sm font-medium px-3 py-1.5 rounded-full">
      {skill}
    </span>
  );
};

export default SkillPill;