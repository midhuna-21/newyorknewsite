import CategoryNavbar from '@/components/CategoryNavbar';
import SecondHeader from '@/components/SecondHeader';
import React from 'react';

export default function EditorialPolicyPage() {
  return (
    <>
     <SecondHeader />
      <CategoryNavbar />
    <div className="bg-white text-dark" style={{ fontFamily: 'Georgia, Times New Roman, serif', lineHeight: '1.6',padding:'80px 0' }}>
     

      <header className="text-center bg-light border-bottom" style={{ padding: '120px 0 80px' }}>
        <div className="mx-auto px-3" style={{ maxWidth: '720px' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 400,
            lineHeight: '1.1',
            marginBottom: '24px'
          }}>
            Our Editorial Policy & Standards
          </h1>
        </div>
      </header>

      <main className="mx-auto px-3" style={{ maxWidth: '720px' }}>
        <article className="py-5">

          <section className="mb-5">
            <h2 className="pb-3 border-bottom mb-4" style={{ fontSize: '2rem', fontWeight: 400 }}>
              A Commitment to Principled Journalism
            </h2>
            <div style={{ fontSize: '1.125rem', lineHeight: '1.7', color: '#333' }}>
              <p className="mb-4">
                Every story we publish starts with a simple question: How does this help our reader make sense of the world? In an era of constant noise, our mission is to provide a signal of clarity. That's not a corporate slogan; it's a responsibility we feel personally.
              </p>
              <p>
                This page is our promise to you about how we uphold that responsibility.
              </p>
            </div>
          </section>

          <section className="mb-5">
            <div style={{ fontSize: '1.125rem', lineHeight: '1.7', color: '#333' }}>
              <p className="mb-4">
                Truth is the raw material of everything we do. But it's often messy, buried under layers of opinion and misinformation. That's why our editorial process is intentionally demanding. We question our own assumptions, we chase down primary sources, and we don't move forward until we can stand firmly behind every fact. It's not the fastest way to publish news, but we believe it's the only right way. And if we ever fall short of that high bar, you'll find a correction at the top of the article. No excuses, no fine print.
              </p>
              <p className="mb-4">
                You also deserve to see the whole picture. The world isn't black and white, and our reporting reflects that. We believe our only true obligation is to you—not to a political party, a specific ideology, or any outside interest. This freedom is what allows us to explore issues from all angles, even the ones that are uncomfortable or challenge conventional wisdom. We think you're smart enough to weigh the evidence and draw your own conclusions. Our job is simply to make sure you have it.
              </p>
              <p>
                Of course, some of the most critical stories couldn't be told without the courage of people who speak up, often at great personal risk. We consider protecting the identity of our sources to be a sacred trust. It's a responsibility we never, ever take lightly, because without that trust, investigative journalism as we know it could not exist.
              </p>
            </div>
          </section>

          <section className="pt-5 mt-5" style={{ borderTop: '2px solid #000' }}>
            <div style={{ fontSize: '1.125rem', lineHeight: '1.7', color: '#333' }}>
              <p className="mb-4">
                These aren't just rules on a static page; they are the values that live in our newsroom. They are the compass that guides every decision we make, every question we ask, and every article we write.
              </p>
              <p>
                It's a commitment we renew daily. If you ever feel we're not living up to it, we want to hear from you. Please get in touch via our <a href="/contact" style={{ color: 'black', textDecoration: 'underline' }}>Contact Us</a> page.
              </p>
            </div>
          </section>

        </article>
      </main>
    </div>
    </>
  );
}
