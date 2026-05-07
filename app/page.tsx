import type { Metadata } from 'next';

import { PersonSchema } from '@/components/Schema';
import Hero from '@/components/Template/Hero';
import PageWrapper from '@/components/Template/PageWrapper';

export const metadata: Metadata = {
  description:
    'Lead Platform Developer at IndyKite, working on infrastructure for data trust and access control for enterprise AI. Co-founder of ICE Markets Ltd. Warsaw.',
};

export default function HomePage() {
  return (
    <PageWrapper>
      <PersonSchema />
      <Hero />
    </PageWrapper>
  );
}
