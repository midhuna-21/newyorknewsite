import React from 'react';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="container py-5 px-3" style={{ maxWidth: '960px' }}>
      <section className="mb-5">
        <span className="display-5 fw-bold mb-4 text-center"> About </span>
        <h1 className="h4 fw-semibold mb-3">Who We Are & What We Stand For</h1>
        <p className="mb-3" style={{ lineHeight: '1.7' }}>
          At its heart, NY State News is a small team of journalists who believe that good information is the bedrock of a strong society.
          We started this project because we felt a growing need for reporting that steps back from the daily chaos to provide a clearer,
          more understandable picture of the forces shaping our world.
        </p>
        <p className="mb-3" style={{ lineHeight: '1.7' }}>
          Our work is focused on connecting the dots between politics, finance, and the law. While we often start by looking at issues affecting
          New York, we know that no story truly happens in a vacuum. We follow the threads wherever they lead, from state houses to the national stage.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="h5 fw-semibold mb-3">Our Promise is Our Process</h2>
        <p className="mb-3" style={{ lineHeight: '1.7' }}>
          Trust isn't given; it's earned, article by article, fact by fact. We want to be open with you about how we work and the principles
          that guide every story we publish.
        </p>
        <p className="mb-3" style={{ lineHeight: '1.7' }}>
          We are relentlessly committed to getting the facts right. For us, that means going beyond the surface-level claims and digging into
          the data, verifying every key point before we even think about publishing. Accuracy isn't just a goal; it's the only acceptable standard.
        </p>
        <p className="mb-3" style={{ lineHeight: '1.7' }}>
          You also deserve the whole story, presented fairly. Our job isn't to tell you what to think, but to lay out the evidence as objectively as we can.
          We don't take sides. Our only agenda is to provide you with a full and impartial picture so you can make up your own mind.
        </p>
        <p className="mb-3" style={{ lineHeight: '1.7' }}>
          Of course, nobody is perfect. If we make a mistake, we will own it. You will see a clear correction on the page, and we will be transparent about
          what was changed and why. That's just part of being accountable to our readers.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="h5 fw-semibold mb-3">Why We Publish as a Team</h2>
        <p className="mb-3" style={{ lineHeight: '1.7' }}>
          When you read an article here, you'll see it's from the "NY State News Staff." This is important to us for two reasons. First, it's the truth—
          our best work happens when our researchers, writers, and editors all contribute to a single story.
        </p>
        <p className="mb-3" style={{ lineHeight: '1.7' }}>
          Second, it provides a vital layer of protection for our team and the brave sources who speak with us. Good investigative journalism can
          attract unwanted attention, and this collective approach allows us to pursue sensitive topics without putting individuals at risk.
          We want the focus to be on the substance of the story, not on the people behind it.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="h5 fw-semibold mb-3">Join the Conversation</h2>
        <p className="mb-3" style={{ lineHeight: '1.7' }}>
          Our work is a starting point, not the final word. We encourage you to reach out with feedback, tips, or questions.
          The best way to do that is through our{' '}
          <Link href="/contact" className="fw-bold text-decoration-underline text-primary">
            Contact Us
          </Link>{' '}
          page. We look forward to hearing from you.
        </p>
      </section>

      <div className="text-muted small text-center">Published by the NY State News Staff</div>
    </div>
  );
};

export default AboutPage;
