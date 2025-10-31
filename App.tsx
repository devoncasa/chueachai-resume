import React from 'react';
import { useState } from 'react';
import type { WorkExperience, ResumeContent, EducationItem } from './types';
import { resumeData } from './data';
import LanguageToggle from './components/LanguageToggle';
import Section from './components/Section';
import TimelineItem from './components/TimelineItem';
import SkillPill from './components/SkillPill';
import PrintButton from './components/PrintButton';

const App: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'th'>('th');
  const content: ResumeContent = resumeData[language];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'th' : 'en');
  };

  const nameParts = content.name.split(' ');
  const firstPart = nameParts.slice(0, nameParts.length - 1).join(' ');
  const lastPart = nameParts.slice(nameParts.length - 1).join(' ');

  return (
    <div className="min-h-screen font-sans text-earth-text p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto bg-earth-main shadow-2xl rounded-2xl overflow-hidden resume-container">
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-10 flex gap-2 no-print">
          <PrintButton text={content.printButtonText} />
          <LanguageToggle
            currentLanguage={language}
            toggleLanguage={toggleLanguage}
            labels={content.languageButton}
          />
        </div>
        <div className="md:grid md:grid-cols-12 landscape:grid landscape:grid-cols-12 print-layout">
          {/* Left Column */}
          <aside className="md:col-span-4 landscape:col-span-4 bg-earth-accent p-8 text-white print-left-col">
            <div className="flex justify-center md:justify-center">
              <div className="w-[12.5rem] h-[12.5rem] rounded-full bg-earth-main border-2 border-earth-dark overflow-hidden">
                 <img 
                    src="https://raw.githubusercontent.com/devoncasa/Tempa123-Asset/main/667008.webp" 
                    alt={content.name} 
                    className="w-full h-full object-cover" 
                  />
              </div>
            </div>

            <div className="mt-20">
              <div className="text-center md:text-center">
                <h1 className="text-3xl lg:text-4xl landscape:text-3xl font-serif font-bold text-earth-dark leading-tight">
                  {firstPart}{' '}
                  <span className="landscape:block md:inline">{lastPart}</span>
                </h1>
                <h2 className="text-2xl font-light text-earth-dark mt-1">{content.title}</h2>
                <p className="text-lg text-earth-dark/90 mt-2">
                  <span className="font-bold">{content.birthdayTitle}:</span> {content.birthday}
                </p>
              </div>
            
              <div className="mt-12 space-y-8 md:text-center landscape:text-center">
                <div>
                  <h3 className="inline-block text-xl font-bold text-earth-dark border-b-2 border-white/30 pb-2 mb-4">{content.contactTitle}</h3>
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
                  <h3 className="inline-block text-xl font-bold text-earth-dark border-b-2 border-white/30 pb-2 mb-4">{content.educationTitle}</h3>
                  <div className="space-y-4 text-base text-earth-dark/90">
                    {content.education.map((edu: EducationItem, index: number) => (
                      <div key={index}>
                        <p className="font-semibold">{edu.school}</p>
                        <p>{edu.degree}</p>
                        <p className="text-sm opacity-80">{edu.year}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Column */}
          <main className="md:col-span-8 landscape:col-span-8 p-8 sm:p-12 bg-earth-bg relative overflow-hidden print-right-col">
             <div className="absolute top-0 right-0 -z-0 pointer-events-none" aria-hidden="true">
                <svg
                  className="absolute -top-20 -right-20 text-earth-dark opacity-5 transform rotate-12"
                  width="400"
                  height="400"
                  viewBox="0 0 200 200"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M162.5 70.3125L133.438 41.25L132.5 42.1875L120.312 29.6875L129.688 20.3125L120.312 10.9375L106.25 25L93.75 12.5L103.125 3.125L93.75 -6.25L91.25 10.625L78.125 1.25L75.625 15.625L62.5 6.25L61.875 20.3125L48.75 10.9375L50 25L37.5 12.5L40 28.125L26.875 18.75L30.625 32.8125L17.5 23.4375L23.75 39.0625L10.625 29.6875L18.75 45.3125L5.625 35.9375L15 51.5625L1.875 42.1875L11.25 57.8125L0 48.4375L8.125 64.0625L0 56.25V135.938L8.125 128.125L0 137.5L11.25 133.75L1.875 143.125L15 139.375L5.625 148.75L18.75 145L10.625 155.312L23.75 151.562L17.5 161.875L30.625 158.125L26.875 167.5L40 163.75L37.5 173.125L50 169.375L48.75 178.75L61.875 170.312L62.5 184.375L75.625 175L78.125 189.375L91.25 180L93.75 196.875L103.125 187.5L93.75 178.125L106.25 165.625L120.312 179.688L129.688 170.312L120.312 160.938L132.5 147.812L133.438 148.75L162.5 119.688L150 100.312L175.625 90.3125L162.5 70.3125Z" />
                  <path d="M159.25 106.25C159.25 107.5 158.5 108.5 157.5 108.5C156.5 108.5 155.75 107.5 155.75 106.25C155.75 105 156.5 104 157.5 104C158.5 104 159.25 105 159.25 106.25Z" />
                </svg>
             </div>
            <Section title={content.workExperienceTitle}>
              <div className="relative border-l-2 border-earth-main pl-8 -ml-1.5 space-y-12">
                {content.workHistory.map((job: WorkExperience, index: number) => (
                  <TimelineItem key={index} experience={job} />
                ))}
              </div>
            </Section>

            <div className="bg-earth-section p-6 sm:p-8 rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16 print-avoid-break">
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
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;