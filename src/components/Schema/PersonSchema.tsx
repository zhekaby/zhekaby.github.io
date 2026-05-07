import degrees from '@/data/resume/degrees';
import work from '@/data/resume/work';
import { AUTHOR_NAME, SITE_URL } from '@/lib/utils';
import JsonLd from './JsonLd';

export default function PersonSchema() {
  const currentJob = work[0];

  const personData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: AUTHOR_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/images/me.svg`,
    jobTitle: currentJob.position,
    sameAs: ['https://www.linkedin.com/in/zhekaby'],
    worksFor: {
      '@type': 'Organization',
      name: currentJob.name,
      url: currentJob.url,
    },
    alumniOf: degrees.map((degree) => ({
      '@type': 'CollegeOrUniversity',
      name: degree.school,
      url: degree.link,
    })),
  };

  return <JsonLd data={personData} />;
}
