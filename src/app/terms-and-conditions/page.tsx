import CategoryNavbar from '@/components/CategoryNavbar';
import React from 'react';

export default function TermsConditionsPage() {
  return (
    <>
      <div className="d-none d-lg-block">
        <CategoryNavbar />
      </div>

      <div
        className="bg-white text-dark"
        style={{
          fontFamily: 'Georgia, Times New Roman, serif',
          lineHeight: '1.6',
          padding: '70px 0',
        }}
      >
        <header
          className="text-center border-bottom bg-light"
          style={{ padding: '120px 0 80px' }}
        >
          <div className="mx-auto px-3" style={{ maxWidth: '720px' }}>
            <h1
              style={{
                fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                fontWeight: 400,
                lineHeight: '1.1',
              }}
            >
              Terms & Conditions
            </h1>
            <p className="mt-3 text-muted" style={{ fontSize: '1rem' }}>
              Effective Date: [Insert Date]
            </p>
          </div>
        </header>

        <main className="mx-auto px-3" style={{ maxWidth: '720px' }}>
          <article className="py-5">
            {/* Intro */}
            <section className="mb-5">
              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                Thanks for visiting NY State News. We’re a small team of
                journalists trying to make sense of a noisy world. These Terms
                are here to keep things clear between us and our readers. By
                using our site, you agree to play by the following simple rules.
              </p>
            </section>

            {/* 1. Our Work, Your Use */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                1. Our Work, Your Use
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                Everything we publish — articles, images, and original reporting
                — is the product of our newsroom.
              </p>
              <ul
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                }}
              >
                <li className="mb-3">
                  You’re welcome to share our stories on social media or quote
                  short excerpts, but please link back to us.
                </li>
                <li className="mb-3">
                  Reposting full articles without asking first isn’t okay. If
                  you’d like to republish something, just email us at{' '}
                  <strong>info@nystatenews.org</strong> and we’ll be glad to
                  talk.
                </li>
              </ul>
            </section>

            {/* 2. Comments & Contributions */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                2. Comments & Contributions
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                We welcome discussion, tips, and reader input — but respect is
                non-negotiable.
              </p>
              <ul
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                }}
              >
                <li className="mb-3">
                  Don’t post anything unlawful, abusive, or misleading.
                </li>
                <li className="mb-3">
                  What you write in comments or messages is your responsibility,
                  not ours.
                </li>
                <li className="mb-3">
                  If something crosses the line, we may remove it.
                </li>
              </ul>
            </section>

            {/* 3. Accuracy & Limits of Liability */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                3. Accuracy & Limits of Liability
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                We put a lot of effort into getting the facts right. But:
              </p>
              <ul
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                }}
              >
                <li className="mb-3">
                  Information is provided “as is” — we can’t guarantee that
                  every single detail will remain up-to-date forever.
                </li>
                <li className="mb-3">
                  We’re not responsible for decisions made solely based on what
                  you read here.
                </li>
                <li className="mb-3">
                  Sometimes we link to outside websites for context. We don’t
                  control those sites, so we can’t take responsibility for their
                  content or policies.
                </li>
              </ul>
            </section>

            {/* 4. Privacy */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                4. Privacy
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                We keep personal data collection to a minimum. For details, see
                our <a href="/privacy-policy">Privacy Policy</a>.
              </p>
            </section>

            {/* 5. Updates to These Terms */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                5. Updates to These Terms
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                The news changes quickly — and sometimes so do our policies. If
                we update these terms, we’ll post the new version here with a
                fresh “Effective Date.”
              </p>
            </section>

            {/* 6. Contact Us */}
            <section
              className="text-center pt-5 mt-5"
              style={{ borderTop: '2px solid #000' }}
            >
              <h2
                className="mb-3"
                style={{ fontSize: '1.5rem', fontWeight: 400 }}
              >
                Contact Us
              </h2>
              <p
                className="mb-4 mx-auto"
                style={{
                  fontSize: '1.125rem',
                  color: '#666',
                  maxWidth: '500px',
                }}
              >
                Questions about these Terms? Reach us anytime at:{' '}
                <strong>info@nystatenews.org</strong>
              </p>
            </section>
          </article>
        </main>
      </div>
    </>
  );
}
