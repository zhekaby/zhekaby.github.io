import type { Metadata } from 'next';

import PageWrapper from '@/components/Template/PageWrapper';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact',
  description: 'Contact Evgenij Zabolotskih on LinkedIn.',
  path: '/contact/',
});

export default function ContactPage() {
  return (
    <PageWrapper>
      <section className="contact-page">
        <header className="contact-header">
          <h1 className="page-title">Get in Touch</h1>
        </header>

        <div className="contact-content">
          <div className="contact-email-block">
            <a
              href="https://www.linkedin.com/in/zhekaby"
              target="_blank"
              rel="noopener"
              className="contact-email-link"
            >
              <span className="contact-email-prefix">linkedin.com/in</span>
              <span className="contact-email-domain">/zhekaby</span>
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
