import CategoryNavbar from '@/components/CategoryNavbar';
import Link from 'next/link';
import React from 'react';

export default function MeetTheTeamPage() {
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
                {/* Header */}
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
                            Meet the Team
                        </h1>
                        <p className="mt-3 text-muted" style={{ fontSize: '1rem' }}>
                            We’re the folks behind the stories — asking questions, digging for
                            answers, and making sense of New York.
                        </p>
                    </div>
                </header>

                {/* Main Content */}
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
                                We don’t just report the news; we take it seriously. Each of us
                                has our own way of working, but we all share the same goal:
                                giving you news that’s clear, accurate, and actually useful.
                            </p>
                        </section>

                        {/* Reporters */}
                        <section className="mb-5">
                            <h2
                                className="pb-3 border-bottom mb-4"
                                style={{ fontSize: '2rem', fontWeight: 400 }}
                            >
                                The Reporters
                            </h2>

                            {/* Denny */}
                            <Link key='denny-r-lame' href={`/team/denny-r-lame`}>
                                <div className="mb-5">
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 500 }}>
                                        Denny R. Lame
                                    </h3>
                                    <p
                                        className="mt-2"
                                        style={{
                                            fontSize: '1.125rem',
                                            lineHeight: '1.7',
                                            color: '#333',
                                        }}
                                    >
                                        Denny’s the kind of reporter who won’t let a story go until
                                        he’s got the full picture. He’ll dig through public records,
                                        make one more call, and keep pushing when others have moved
                                        on. His stories are sharp, detailed, and always to the point.
                                    </p>
                                    <a
                                        href="https://lmarena.ai/c/88af3dd8-0e7a-4498-9526-ff59fda0313a#"
                                        className="text-primary"
                                    >
                                        👉 Read more about Denny
                                    </a>
                                </div>
                            </Link>

                            {/* Sean */}
                            <Link key='sean-t-martinez' href={`/team/sean-t-martinez`}>

                                <div className="mb-5">
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 500 }}>
                                        Sean T. Martinez
                                    </h3>
                                    <p
                                        className="mt-2"
                                        style={{
                                            fontSize: '1.125rem',
                                            lineHeight: '1.7',
                                            color: '#333',
                                        }}
                                    >
                                        Sean has a gift for explaining complicated things in plain
                                        English. He doesn’t write to impress — he writes so you
                                        actually understand what’s going on. His straightforward
                                        questions often lead to the clearest answers.
                                    </p>
                                    <a
                                        href="https://lmarena.ai/c/88af3dd8-0e7a-4498-9526-ff59fda0313a#"
                                        className="text-primary"
                                    >
                                        👉 Read more about Sean
                                    </a>
                                </div>
                            </Link>
                            {/* Craig */}
                            <Link key='craig-a-smith' href={`/team/craig-a-smith`}>

                                <div className="mb-5">
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 500 }}>
                                        Craig A. Smith
                                    </h3>
                                    <p
                                        className="mt-2"
                                        style={{
                                            fontSize: '1.125rem',
                                            lineHeight: '1.7',
                                            color: '#333',
                                        }}
                                    >
                                        Craig is relentless when it comes to asking “Why?” and “What
                                        does this really mean?” In breaking news, he stays calm and
                                        focused, cutting through the noise to find what matters.
                                    </p>
                                    <a
                                        href="https://lmarena.ai/c/88af3dd8-0e7a-4498-9526-ff59fda0313a#"
                                        className="text-primary"
                                    >
                                        👉 Read more about Craig
                                    </a>
                                </div>
                            </Link>


                            {/* Edwin */}
                            <Link key='edwin-v-christopher' href={`/team/edwin-v-christopher`}>

                                <div className="mb-5">
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 500 }}>
                                        Edwin V. Christopher
                                    </h3>
                                    <p
                                        className="mt-2"
                                        style={{
                                            fontSize: '1.125rem',
                                            lineHeight: '1.7',
                                            color: '#333',
                                        }}
                                    >
                                        Edwin is the kind of reporter who double-checks everything —
                                        twice. While others rush to publish, he takes the time to get
                                        it right. His stories are steady, reliable, and something you
                                        can trust.
                                    </p>
                                    <a
                                        href="https://lmarena.ai/c/88af3dd8-0e7a-4498-9526-ff59fda0313a#"
                                        className="text-primary"
                                    >
                                        👉 Read more about Edwin
                                    </a>
                                </div>
                            </Link>

                            {/* Martha */}
                            <Link key='martha-w-johnson' href={`/team/martha-w-johnson`}>

                                <div className="mb-5">
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 500 }}>
                                        Martha W. Johnson <span className="text-muted">(Editor)</span>
                                    </h3>
                                    <p
                                        className="mt-2"
                                        style={{
                                            fontSize: '1.125rem',
                                            lineHeight: '1.7',
                                            color: '#333',
                                        }}
                                    >
                                        Martha is the one making sure every story is clear, fair, and
                                        accurate before it goes live. She’s the steady hand keeping
                                        things on track in a busy newsroom. You might not see her name
                                        on every story, but her work is all over them.
                                    </p>
                                    <a
                                        href="https://lmarena.ai/c/88af3dd8-0e7a-4498-9526-ff59fda0313a#"
                                        className="text-primary"
                                    >
                                        👉 Read more about Martha
                                    </a>
                                </div>
                            </Link>

                        </section>

                        {/* Staff */}
      <section className="mb-5">
  <h2
    className="pb-3 border-bottom mb-4"
    style={{ fontSize: "2rem", fontWeight: 400 }}
  >
    NY State News Staff
  </h2>
  <p
    style={{
      fontSize: "1.125rem",
      lineHeight: "1.7",
      color: "#333",
      textAlign: "justify",
    }}
  >
    Some stories are team efforts — multiple reporters working
    together, or contributions from outside experts. When you see{" "}
    <Link
      href="/our-team/staff"
      className="text-primary hover:underline"
      style={{ fontWeight: 500 }}
    >
      “NY State News Staff”
    </Link>{" "}
    on a byline, it means the piece went through our full editorial
    process and meets our standards.
  </p>
</section>

                        {/* Beliefs */}
                        <section>
                            <h2
                                className="pb-3 border-bottom mb-4"
                                style={{ fontSize: '2rem', fontWeight: 400 }}
                            >
                                What We Believe
                            </h2>
                            <p
                                style={{
                                    fontSize: '1.125rem',
                                    lineHeight: '1.7',
                                    color: '#333',
                                    textAlign: 'justify',
                                }}
                            >
                                We believe in journalism you can count on. That means checking
                                facts, asking tough questions, and admitting when we get
                                something wrong. Our job isn’t just to break news — it’s to help
                                you understand it. We’re not perfect, but we’re always working
                                to get it right.
                            </p>
                        </section>
                    </article>
                </main>
            </div>
        </>
    );
}
