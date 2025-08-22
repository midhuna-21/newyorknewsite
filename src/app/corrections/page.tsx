import CategoryNavbar from '@/components/CategoryNavbar';
import React from 'react';

export default function CorrectionsPolicyPage() {
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
              Corrections Policy
            </h1>
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
                At NY State News, we believe journalism only works if readers can
                trust it. That trust comes from accuracy, and while we do
                everything we can to get the facts right the first time, we know
                mistakes are sometimes unavoidable. When they happen, we don’t
                hide them. We correct them openly and explain what changed.
              </p>
            </section>

            {/* How We Aim to Get It Right */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                How We Aim to Get It Right
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                Every story we publish goes through checks before it appears
                online. We confirm names, dates, and figures, and we do our best
                to separate verified facts from opinion or speculation. But
                reporting is fast-moving, and new information can come to light
                after publication. That’s why having a clear corrections process
                matters to us.
              </p>
            </section>

            {/* What Happens When We Spot an Error */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                What Happens When We Spot (or Are Told About) an Error
              </h2>
              <ul
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                }}
              >
                <li className="mb-3">
                  First, we check the claim carefully against original sources.
                </li>
                <li className="mb-3">
                  If something is indeed wrong, we update the article as soon as
                  possible.
                </li>
                <li className="mb-3">
                  A short correction note is added to the story so readers can
                  see exactly what was changed.
                </li>
                <li className="mb-3">
                  If the error is significant enough to change the meaning of
                  the piece, we may also highlight the correction separately so
                  no one misses it.
                </li>
              </ul>
            </section>

            {/* Different Kinds of Corrections */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                Different Kinds of Corrections
              </h2>
              <ul
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                }}
              >
                <li className="mb-3">
                  <strong>Small Fixes:</strong> Typos, grammar slips, or broken
                  links. We just fix these — no note needed.
                </li>
                <li className="mb-3">
                  <strong>Factual Errors:</strong> A wrong number, a misquote,
                  or an incorrect detail. These always get a visible correction
                  note.
                </li>
                <li className="mb-3">
                  <strong>Big Mistakes:</strong> Anything that changes the
                  substance of the story. These not only get a correction note
                  but may also be acknowledged in a follow-up or separate
                  update.
                </li>
                <li className="mb-3">
                  <strong>Clarifications:</strong> Sometimes what we wrote is
                  technically correct but could be read in a misleading way. In
                  those cases, we add context so the meaning is clear.
                </li>
              </ul>
            </section>

            {/* How You Can Help */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                How You Can Help
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                Our readers are part of this process. If you think we’ve gotten
                something wrong, please let us know.
              </p>
              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                Email us at <strong>corrections@nystatenews.org</strong> with:
              </p>
              <ul
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                }}
              >
                <li className="mb-3">The link to the story</li>
                <li className="mb-3">What you believe is incorrect</li>
                <li className="mb-3">Any evidence or sources you can share</li>
              </ul>
              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                Every request is reviewed by our editorial team, and we’ll get
                back to you once we’ve checked it.
              </p>
            </section>

            {/* Why This Matters */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                Why This Matters
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                Corrections are not a weakness — they are proof of accountability.
                We’d rather admit a mistake and set the record straight than
                leave an error unaddressed. That’s how journalism earns trust,
                one story at a time.
              </p>
            </section>

            {/* Contact */}
            <section
              className="text-center pt-5 mt-5"
              style={{ borderTop: '2px solid #000' }}
            >
              <h2
                className="mb-3"
                style={{ fontSize: '1.5rem', fontWeight: 400 }}
              >
                Corrections Contact
              </h2>
              <p
                className="mb-4 mx-auto"
                style={{
                  fontSize: '1.125rem',
                  color: '#666',
                  maxWidth: '500px',
                }}
              >
                📧 Email us at <strong>corrections@nystatenews.org</strong>
              </p>
            </section>
          </article>
        </main>
      </div>
    </>
  );
}
