import React, { useState } from 'react';
import Header from '../components/Header';
import ProfileImage from '../components/ProfileImage';
import SkillsSection from '../components/SkillsSection';
import SectionTitle from '../components/SectionTitle';
import NewsList from '../components/NewsList';
import EducationList from '../components/EducationList';
import ProjectList from '../components/ProjectList';
import PublicationList from '../components/PublicationList';
import ExperienceList from '../components/ExperienceList';
import AwardList from '../components/AwardList';
import About from '../components/About';
import { news } from '../data/news';
import { education } from '../data/education';
import { projects } from '../data/projects';
import { publications } from '../data/publications';
import { experience } from '../data/experience';
import { awards } from '../data/awards';
import { skills } from '../data/skills';
import { profile } from '../data/profile';

type TabType = 'projects' | 'publications' | 'experience' | 'awards';

const AboutSection = () => (
  <section id="about" className="pt-20 md:pt-24 pb-12 md:pb-16 bg-white scroll-mt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="About Me" />
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-start">
        <ProfileImage />
        <div className="w-full lg:w-2/3">
          <div className="prose max-w-none">
            <About />
            <SkillsSection skills={skills} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const NewsSection = () => (
  <section id="news" className="py-8 md:py-12 bg-white scroll-mt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Recent News" />
      <NewsList items={news} />
    </div>
  </section>
);

const ResearchInterestsSection = () => (
  <section id="research" className="py-8 md:py-12 bg-white scroll-mt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Research Interests" />
      <div className="mb-4 text-gray-700 text-base md:text-lg">
        {profile.researchInterests.description}
      </div>
      <div className="flex flex-wrap gap-2 md:gap-3 mt-2">
        {profile.researchInterests.tags.map((tag, idx) => (
          <span key={idx} className={`${tag.color} px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-medium`}>
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  </section>
);

const EducationSection = () => (
  <section id="education" className="py-8 md:py-12 bg-white scroll-mt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Education" />
      <EducationList items={education} />
    </div>
  </section>
);

const TabbedSection = ({ activeTab, setActiveTab }: { activeTab: TabType, setActiveTab: (tab: TabType) => void }) => {
  const tabs: { id: TabType; label: string }[] = [
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'experience', label: 'Experience' },
    { id: 'awards', label: 'Honors & Awards' },
  ];

  return (
    <>
      {/* Desktop Tabs */}
      <div className="hidden md:block">
        <section id="projects" className="py-8 md:py-12 bg-white scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      whitespace-nowrap py-4 px-1 border-b-2 text-lg transition-all
                      ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-600 font-bold'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }
                    `}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
            <div className="mt-8">
              {activeTab === 'projects' && <ProjectList items={projects} />}
              {activeTab === 'publications' && <PublicationList items={publications} />}
              {activeTab === 'experience' && <ExperienceList items={experience} />}
              {activeTab === 'awards' && <AwardList items={awards} />}
            </div>
          </div>
        </section>
      </div>

      {/* Mobile Sequential Sections */}
      <div className="md:hidden">
        <section id="projects" className="py-8 bg-white scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Projects" />
            <ProjectList items={projects} />
          </div>
        </section>

        <section id="publications" className="py-8 bg-white scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Publications" />
            <PublicationList items={publications} />
          </div>
        </section>

        <section id="experience" className="py-8 bg-white scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Experience" />
            <ExperienceList items={experience} />
          </div>
        </section>

        <section id="awards" className="py-8 bg-white scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Honors & Awards" />
            <AwardList items={awards} />
          </div>
        </section>
      </div>
    </>
  );
};

const Footer = () => (
  <footer className="mt-12 md:mt-16 py-4 md:py-6 bg-white border-t border-gray-200 text-center text-gray-500 text-xs md:text-sm">
    Copyright © 2025 Jeonghyun Kim. All rights reserved.
  </footer>
);

const PersonalPage = () => {
  const [activeTab, setActiveTab] = useState<TabType>('projects');
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Header />
      <AboutSection />
      <NewsSection />
      <ResearchInterestsSection />
      <EducationSection />
      <TabbedSection activeTab={activeTab} setActiveTab={setActiveTab} />
      <Footer />
    </div>
  );
};

export default PersonalPage;
