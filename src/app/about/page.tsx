import CategoryNavbar from '@/components/CategoryNavbar';
import SecondHeader from '@/components/SecondHeader';
import React from 'react';

export default function AboutPage() {
  return (
<>

      <SecondHeader />
      <CategoryNavbar />
    <div className="bg-white text-dark" style={{ fontFamily: 'Georgia, Times New Roman, serif', lineHeight: '1.6', padding: '80px 0' }}>
      <header className="text-center border-bottom bg-light" style={{ padding: '120px 0 80px' }}>
        <div className="mx-auto px-3" style={{ maxWidth: '720px' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 400, lineHeight: '1.1' }}>About Us</h1>
        </div>
      </header>
      <main className="mx-auto px-3" style={{ maxWidth: '720px' }}>
        <article className="py-5">
          <section className="mb-5">
            <h2 className="pb-3 border-bottom mb-4" style={{ fontSize: '2rem', fontWeight: 400 }}>Who We Are & What We Stand For</h2>
            <div style={{ fontSize: '1.125rem', lineHeight: '1.7', color: '#333' }}>
              <p className="mb-4">
                At its heart, NY State News is a small team of journalists who believe that good information is the bedrock of a strong society. We started this project because we felt a growing need for reporting that steps back from the daily chaos to provide a clearer, more understandable picture of the forces shaping our world.
              </p>
              <p>
                Our work is focused on connecting the dots between politics, finance, and the law. While we often start by looking at issues affecting New York, we know that no story truly happens in a vacuum. We follow the threads wherever they lead, from state houses to the national stage.
              </p>
            </div>
          </section>

          <section className="mb-5">
            <h2 className="pb-3 border-bottom mb-4" style={{ fontSize: '2rem', fontWeight: 400 }}>Our Promise is Our Process</h2>
            <div style={{ fontSize: '1.125rem', lineHeight: '1.7', color: '#333' }}>
              <p className="mb-4">
                Trust isn't given; it's earned, article by article, fact by fact. We want to be open with you about how we work and the principles that guide every story we publish.
              </p>
              <p className="mb-4">
                We are relentlessly committed to getting the facts right. For us, that means going beyond the surface-level claims and digging into the data, verifying every key point before we even think about publishing. Accuracy isn't just a goal; it's the only acceptable standard.
              </p>
              <p className="mb-4">
                You also deserve the whole story, presented fairly. Our job isn't to tell you what to think, but to lay out the evidence as objectively as we can. We don't take sides. Our only agenda is to provide you with a full and impartial picture so you can make up your own mind.
              </p>
              <p>
                Of course, nobody is perfect. If we make a mistake, we will own it. You will see a clear correction on the page, and we will be transparent about what was changed and why. That's just part of being accountable to our readers.
              </p>
            </div>
          </section>

          <section className="mb-5">
            <h2 className="pb-3 border-bottom mb-4" style={{ fontSize: '2rem', fontWeight: 400 }}>Why We Publish as a Team</h2>
            <div style={{ fontSize: '1.125rem', lineHeight: '1.7', color: '#333' }}>
              <p className="mb-4">
                When you read an article here, you'll see it's from the "NY State News Staff." This is important to us for two reasons. First, it's the truth—our best work happens when our researchers, writers, and editors all contribute to a single story.
              </p>
              <p>
                Second, it provides a vital layer of protection for our team and the brave sources who speak with us. Good investigative journalism can attract unwanted attention, and this collective approach allows us to pursue sensitive topics without putting individuals at risk. We want the focus to be on the substance of the story, not on the people behind it.
              </p>
            </div>
          </section>
          <section className="text-center pt-5 mt-5 " style={{ borderTop: '2px solid #000' }}>
            <h2 className="mb-3" style={{ fontSize: '1.5rem', fontWeight: 400 }}>Join the Conversation</h2>
            <p className="mb-4 mx-auto" style={{ fontSize: '1.125rem', color: '#666', maxWidth: '500px' }}>
              Our work is a starting point, not the final word. We encourage you to reach out with feedback, tips, or questions.
            </p>
            <a
              href="/contact"
              style={{
                display: 'inline-block',
                padding: '12px 28px',
                backgroundColor: '#1a1a1a',
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '400',
                letterSpacing: '0.5px',
                border: '2px solid #1a1a1a',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >
              Contact Us
            </a>
          </section>
        </article>
      </main>
      {/* <div className="text-center">
        <div className="px- mx-auto" style={{ maxWidth: '720px' }}>
          <p
            className="mb-0"
            style={{
              fontStyle: 'italic',
              fontWeight: 300,
              opacity: 0.9
            }}
          >
            Published by the NY State News Staff
          </p>
        </div>
      </div> */}
    </div>
</>
  );
}
