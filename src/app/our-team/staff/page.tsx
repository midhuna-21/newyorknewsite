import CategoryNavbar from '@/components/CategoryNavbar';
import React from 'react';
import Link from 'next/link';

export default function StaffPage() {
  return (
    <>
      {/* Desktop category navbar */}
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
        {/* Header */}
        <header
          className="bg-light border-bottom text-center"
          style={{ padding: '120px 0 80px' }}
        >
          <div className="mx-auto px-3" style={{ maxWidth: '720px' }}>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 400,
                lineHeight: '1.1',
                marginBottom: '24px',
              }}
            >
              NY State News Staff
            </h1>
          </div>
        </header>

        {/* Main content */}
        <main className="mx-auto px-3" style={{ maxWidth: '720px' }}>
          <article className="py-5">
            {/* Intro */}
            <section className="mb-5">
              <div
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                <p>
                  Not every story carries a single name. Some pieces come from
                  the collective effort of our newsroom — editors, reporters,
                  researchers, and fact-checkers all working together. That’s
                  when you’ll see the <strong>NY State News Staff</strong>{' '}
                  byline.
                </p>
                <p>
                  This byline doesn’t mean the work is anonymous. It means the
                  reporting was a true collaboration. Maybe several reporters
                  shared notes from different corners of the state, or an editor
                  stepped in to help shape a fast-moving update. Sometimes it’s
                  breaking news, sometimes it’s a deep background piece, but in
                  every case, it reflects the combined work of our team.
                </p>
              </div>
            </section>

            {/* Standards list */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                What the Staff Byline Means
              </h2>
              <ul
                className="ps-0 mb-0"
                style={{
                  listStyle: 'none',
                  fontSize: '1.125rem',
                  color: '#333',
                  lineHeight: '1.7',
                  textAlign: 'justify',
                }}
              >
                <li className="mb-3">
                  ✅ Verified reporting from multiple sources
                </li>
                <li className="mb-3">
                  ✅ Careful editing for clarity and fairness
                </li>
                <li className="mb-3">
                  ✅ Fact-checking to ensure accuracy before publication
                </li>
              </ul>
            </section>

            {/* Teamwork section */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                Built on Teamwork
              </h2>
              <div
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                <p>
                  Our newsroom is built on teamwork. Staff pieces are often the
                  ones that move quickest through the cycle, when speed and
                  precision both matter. They’re also the ones where different
                  voices come together, giving readers a broader view than a
                  single byline might capture.
                </p>
                <p>
                  At the end of the day, whether a story carries one reporter’s
                  name or the staff byline, it represents the same standard:
                  journalism you can rely on.
                </p>
              </div>
            </section>

         {/* Back link */}
<section
  className="pt-6 mt-10"
  style={{
    borderTop: '3px solid #000', // strong black divider
  }}
>
  <div>
    <p
      style={{
        fontSize: '1.1rem',
        color: '#222',
        marginBottom: '8px',
        fontStyle: 'italic',
      }}
    >
      Learn more about the people behind our reporting.
    </p>
   <Link
  href="/our-team"
  className="inline-block text-lg font-semibold text-black hover:underline"
>
  ◀ Back to Our Team
</Link>

  </div>
</section>

          </article>
        </main>
      </div>
    </>
  );
}
