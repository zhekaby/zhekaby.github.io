import type { Metadata } from 'next';

import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import ResumeNav from '@/components/Resume/ResumeNav';
import Skills from '@/components/Resume/Skills';
import PageWrapper from '@/components/Template/PageWrapper';
import degrees from '@/data/resume/degrees';
import { categories, skills } from '@/data/resume/skills';
import work from '@/data/resume/work';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Resume',
  description:
    'Evgenij Zabolotskih · Lead Platform Developer. IndyKite, ICE Markets Ltd, IDT/net2phone. Go, Kubernetes, distributed systems.',
  path: '/resume/',
});

export default function ResumePage() {
  return (
    <PageWrapper>
      <section className="resume-page">
        <header className="resume-header">
          <h1 className="resume-title">Resume</h1>
          <p className="resume-summary">
            Senior staff platform developer. 21 years building backends, 11 in
            fintech. Currently Lead Platform Developer at{' '}
            <a href="https://www.indykite.ai">IndyKite</a>, on the Go services
            and multi-cloud infrastructure behind a data-trust and
            access-control product for enterprise AI. Concurrently co-founder of{' '}
            <a href="https://ice-markets.com">ICE Markets Ltd</a> since 2015, an
            FX / crypto broker in its 11th year of continuous operation.
            Designer and architect of{' '}
            <a href="https://cryptocopy.org">cryptocopy.org</a> (2024).
          </p>
        </header>

        <ResumeNav />

        <div className="resume-content">
          <section id="experience" className="resume-section">
            <Experience data={work} />
          </section>

          <section id="education" className="resume-section">
            <Education data={degrees} />
          </section>

          <section id="skills" className="resume-section">
            <Skills skills={skills} categories={categories} />
          </section>
        </div>
      </section>
    </PageWrapper>
  );
}
