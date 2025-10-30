import React from 'react';
import { useState } from 'react';
import type { WorkExperience, ResumeContent, EducationItem } from './types';
import { resumeData } from './data';
import LanguageToggle from './components/LanguageToggle';
import Section from './components/Section';
import TimelineItem from './components/TimelineItem';
import SkillPill from './components/SkillPill';

const App: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'th'>('en');
  const content: ResumeContent = resumeData[language];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'th' : 'en');
  };

  return (
    <div className="min-h-screen font-sans text-earth-text p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto bg-earth-main shadow-2xl rounded-2xl overflow-hidden">
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-10">
          <LanguageToggle
            currentLanguage={language}
            toggleLanguage={toggleLanguage}
            labels={content.languageButton}
          />
        </div>
        <div className="md:grid md:grid-cols-12">
          {/* Left Column */}
          <aside className="md:col-span-4 bg-earth-accent p-8 text-white">
            <div className="flex justify-center md:justify-center">
              <div className="w-32 h-32 rounded-full bg-earth-main flex items-center justify-center ring-4 ring-white/50">
                 {/* Image placeholder is intentionally left blank */}
              </div>
            </div>

            <div className="mt-20">
              <div className="text-center md:text-center">
                <h1 className={`text-4xl font-serif font-bold text-earth-dark ${language === 'th' ? 'whitespace-nowrap' : ''}`}>{content.name}</h1>
                <h2 className="text-2xl font-light text-earth-dark mt-1">{content.title}</h2>
                <p className="text-lg text-earth-dark/90 mt-2">
                  <span className="font-bold">{content.birthdayTitle}:</span> {content.birthday}
                </p>
              </div>
            
              <div className="mt-12 space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-earth-dark border-b-2 border-white/30 pb-2 mb-4">{content.contactTitle}</h3>
                  <div className="space-y-4 text-base text-earth-dark/90">
                    <div>
                      <p>{content.contact.phone}</p>
                      <p className="mt-1">{content.contact.email}</p>
                    </div>
                    <div className="pt-2">
                        <p className="font-semibold">{content.addressTitle}</p>
                        <p>{content.contact.address}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-earth-dark border-b-2 border-white/30 pb-2 mb-4">{content.educationTitle}</h3>
                  <div className="space-y-4 text-base text-earth-dark/90">
                    {content.education.map((edu: EducationItem, index: number) => (
                      <div key={index}>
                        <p className="font-semibold">{edu.degree}</p>
                        <p>{edu.school}</p>
                        <p className="text-sm opacity-80">{edu.year}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Column */}
          <main className="md:col-span-8 p-8 sm:p-12 bg-earth-bg">
            <Section title={content.workExperienceTitle}>
              <div className="relative border-l-2 border-earth-main pl-8 -ml-1.5 space-y-12">
                {content.workHistory.map((job: WorkExperience, index: number) => (
                  <TimelineItem key={index} experience={job} />
                ))}
              </div>
            </Section>

            <div className="bg-earth-section p-6 sm:p-8 rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
              <Section title={content.skills.title}>
                <div className="flex flex-wrap gap-3">
                  {content.skills.list.map((skill: string, index: number) => (
                    <SkillPill key={index} skill={skill} />
                  ))}
                </div>
              </Section>
              
              <Section title={content.strengths.title}>
                <ul className="list-disc list-inside space-y-2 text-base">
                  {content.strengths.list.map((strength: string, index: number) => (
                    <li key={index}>{strength}</li>
                  ))}
                </ul>
              </Section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;