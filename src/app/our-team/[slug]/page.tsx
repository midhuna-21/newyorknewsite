import { GetStaticPaths, GetStaticProps } from "next";
import authors from "../../../../public/data/author.json";
import CategoryNavbar from "@/components/CategoryNavbar";
import Link from "next/link";

interface AuthorProps {
    author: {
        slug: string;
        name: string;
        role: string;
        twitter: string;
        twitterUrl: string;
        bio: string;
    };
}

export async function generateStaticParams() {
    return authors.map((author) => ({
        slug: author.slug,
    }));
}


export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const author = authors.find((a) => a.slug === slug);

    if (!author) {
        return <div>Author not found</div>;
    }

    return (
        <>
            {/* Desktop navbar */}
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
                    style={{ padding: '100px 0 70px' }}
                >
                    <div className="mx-auto px-3" style={{ maxWidth: '720px' }}>
                        <h1
                            style={{
                                fontSize: 'clamp(2.75rem, 6vw, 4rem)',
                                fontWeight: 400,
                                lineHeight: '1.1',
                            }}
                        >
                            {author.name}
                        </h1>
                        <p className="mt-3 text-muted" style={{ fontSize: '1.1rem' }}>
                            {author.role}
                        </p>
                    </div>
                </header>

                {/* Main Content */}
                <main className="mx-auto px-3" style={{ maxWidth: '720px' }}>
                    <article className="py-5">

                        {/* Author Bio */}
                        <section className="mb-5">
                            <p
                                style={{
                                    fontSize: '1.125rem',
                                    lineHeight: '1.7',
                                    color: '#333',
                                    textAlign: 'justify',
                                }}
                            >
                                {author.bio}
                            </p>

                        </section>

                        {/* Links */}
                        <section className="mt-5">
                            <p style={{ fontSize: '1.125rem' }}>
                                📢 Follow Craig on Twitter:{' '}
                                <a
                                    href={author.twitterUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary"
                                >
                                    {author.twitter}
                                </a>
                            </p>
                            <p style={{ fontSize: '1.125rem', marginTop: '20px' }}>
                                👉 <Link href="">Read Craig’s latest stories</Link>
                            </p>
                            <p style={{ fontSize: '1.125rem' }}>
                                👉 <Link href="/team">Back to Our Team</Link>
                            </p>
                        </section>
                    </article>
                </main>
            </div>
        </>
    );
}

