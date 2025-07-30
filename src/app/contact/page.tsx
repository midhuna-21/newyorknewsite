import CategoryNavbar from '@/components/CategoryNavbar';
import SecondHeader from '@/components/SecondHeader';
import React from 'react';

export default function ContactPage() {
  return (
    <>
      {/* <SecondHeader /> */}
       <div className="d-none d-lg-block">
      <CategoryNavbar />
      </div>
    <div className="bg-white text-dark" style={{ fontFamily: 'Georgia, Times New Roman, serif', lineHeight: '1.6',padding: '70px 0' }}>
      <header className="bg-light border-bottom text-center" style={{ padding: '120px 0 80px' }}>
        <div className="mx-auto px-3" style={{ maxWidth: '720px' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '400', lineHeight: '1.1', marginBottom: '24px' }}>
            Contact Our Editorial Team
          </h1>
        </div>
      </header>
      <main className="mx-auto px-3" style={{ maxWidth: '720px' }}>
        <article className="py-5">
          <section className="mb-5">
            <div style={{ fontSize: '1.125rem', lineHeight: '1.7', color: '#333',textAlign:"justify" }}>
              <p>
                We believe that great journalism is a conversation. Your feedback, questions, and story tips are invaluable to our work and help keep us accountable to our readers.
              </p>
            </div>
          </section>

          <section className="mb-5">
            <h2 className="pb-3 border-bottom mb-4" style={{ fontSize: '2rem', fontWeight: 400 }}>
              A Single, Secure Point of Contact
            </h2>
            <div style={{ fontSize: '1.125rem', lineHeight: '1.7', color: '#333',textAlign:"justify" }}>
              <p className="mb-4">
                To ensure the privacy and security of all communications—for both our readers and our sources—we have centralized our inbox. For all inquiries, please contact us at our secure, end-to-end encrypted email address.
              </p>
              <div className="text-center mb-4" style={{ backgroundColor: '#f8f8f8', border: '2px solid #1a1a1a', padding: '32px' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#666',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  Email:
                </p>
                <a
                  href="mailto:nystatenews@proton.me"
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '400',
                    color: '#1a1a1a',
                    textDecoration: 'none',
                    borderBottom: '2px solid #1a1a1a'
                  }}
                >
                  nystatenews@proton.me
                </a>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <h2 className="pb-3 border-bottom mb-4" style={{ fontSize: '2rem', fontWeight: 400 }}>
              We welcome:
            </h2>
            <ul className="ps-0 mb-0" style={{ listStyle: 'none', fontSize: '1.125rem', color: '#333', lineHeight: '1.7',textAlign:"justify" }}>
              <li className="mb-4">
                <strong>General Feedback:</strong> Your thoughts on our articles and our mission.
              </li>
              <li className="mb-4">
                <strong>Correction Requests:</strong> If you see something that needs correcting, please let us know.
              </li>
              <li className="mb-4">
                <strong>Story Tips:</strong> We review all tips. For maximum security, we recommend you create a free, anonymous ProtonMail account before contacting us.
              </li>
              <li>
                <strong>Press Inquiries:</strong> All media-related questions should be directed to this address.
              </li>
            </ul>
          </section>

          <section className="pt-5 mt-5" style={{ borderTop: '2px solid #000' }}>
            <div style={{ fontSize: '1.125rem', color: '#333', lineHeight: '1.7',textAlign:"justify" }}>
              <p>
                We are committed to reviewing every message we receive. Due to the high volume of correspondence, we may not be able to provide a personal response to every email, but we thank you for taking the time to reach out.
              </p>
            </div>
          </section>
        </article>
      </main>
    </div>
    </>
  );
}
    