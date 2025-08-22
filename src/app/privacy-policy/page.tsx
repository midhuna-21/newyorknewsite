import CategoryNavbar from '@/components/CategoryNavbar';
import React from 'react';

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            {/* <p className="mt-3 text-muted" style={{ fontSize: '1rem' }}>
              Effective Date: [Insert Date]
            </p> */}
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
                At NY State News, we respect your privacy as much as we respect
                the truth in reporting. We keep things simple: we collect as
                little information as possible, use it only to make your
                experience better, and never share it with people who
                shouldn’t have it.
              </p>
            </section>

            {/* What We Collect */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                What We Collect (and Why)
              </h2>
              <ul
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                }}
              >
                <li className="mb-3">
                  <strong>Basic Site Stats:</strong> Like most websites, we
                  track how people use our site — which articles are read most,
                  how readers find us, and where they’re visiting from. This
                  helps us understand what’s useful and what needs improving.
                </li>
                <li className="mb-3">
                  <strong>Emails You Give Us:</strong> If you sign up for our
                  newsletter, we only keep your email so we can send you
                  updates. Nothing more.
                </li>
                <li className="mb-3">
                  <strong>Messages You Send Us:</strong> If you write to us,
                  we’ll keep your message long enough to reply and handle your
                  request.
                </li>
              </ul>
            </section>

            {/* Cookies */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                Cookies (the Digital Kind)
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                Yes, like most websites, we use cookies. They help us remember
                your settings and see how the site is performing. You can turn
                them off in your browser anytime — the site will still work.
              </p>
            </section>

            {/* What We Don’t Do */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                What We Don’t Do
              </h2>
              <ul
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                }}
              >
                <li className="mb-3">
                  We don’t sell or trade your personal details.
                </li>
                <li className="mb-3">We don’t stalk you across the internet.</li>
                <li className="mb-3">We don’t use shady trackers.</li>
              </ul>
            </section>

            {/* Your Choices */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                Your Choices
              </h2>
              <ul
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                }}
              >
                <li className="mb-3">
                  You can unsubscribe from our emails whenever you like.
                </li>
                <li className="mb-3">
                  If you want us to delete your information, just email us at{' '}
                  <strong>privacy@nystatenews.org</strong>.
                </li>
                <li className="mb-3">
                  You’re always in control of your own data.
                </li>
              </ul>
            </section>

            {/* Keeping Safe */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                Keeping Your Info Safe
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                We don’t store more than we need, and we do our best to keep
                what we have secure. No system is perfect, but we believe that
                collecting less data is the best way to protect you.
              </p>
            </section>

            {/* Updates */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                Updates
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                If we ever change this policy, we’ll post the update here and
                put a new date at the top.
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
                Questions?
              </h2>
              <p
                className="mb-4 mx-auto"
                style={{
                  fontSize: '1.125rem',
                  color: '#666',
                  maxWidth: '500px',
                }}
              >
                Drop us a line at{' '}
                <strong>privacy@nystatenews.org</strong> and we’ll be happy to
                explain more.
              </p>
            </section>
          </article>
        </main>
      </div>
    </>
  );
}
