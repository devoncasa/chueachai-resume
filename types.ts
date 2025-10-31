export interface ContactInfo {
  phone: string;
  address: string;
  email: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  year: string;
}

export interface WorkExperience {
  role: string;
  kitchen: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export interface Skills {
  title: string;
  list: string[];
}

export interface Strengths {
  title: string;
  list: string[];
}

export interface ResumeContent {
  name: string;
  title: string;
  birthday: string;
  birthdayTitle: string;
  contactTitle: string;
  contact: ContactInfo;
  addressTitle: string;
  emailTitle: string;
  educationTitle: string;
  education: EducationItem[];
  workExperienceTitle: string;
  workHistory: WorkExperience[];
  skills: Skills;
  strengths: Strengths;
  printButtonText: string;
  languageButton: {
    en: string;
    th: string;
  }
}

export interface ResumeData {
  en: ResumeContent;
  th: ResumeContent;
}
