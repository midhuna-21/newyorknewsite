'use client';
import Image from 'next/image';
import Link from 'next/link';

interface NewsItem {
  title: string;
  shortdescription: string;
  image: string;
  author?: string;
  category?: string;
  slug: string;
}

export default function RigtImageContent({ data }: { data: NewsItem }) {
  return (
    <div className="container py-5">
      <Link
        title={`${data.slug}`}
        href={`/${data.category}/${data.slug}`}
        className='text-decoration-none'
        style={{ display: 'flex', width: '100%', textDecoration: 'none', color: 'inherit', }}
      >

        <div className="row">
          <div
            className="col-md-6 d-flex flex-column justify-content-center"
            style={{
              height: '100%',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                maxWidth: '500px',
                margin: '0 auto',
              }}
            >
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  color: 'rgb(219, 51, 52)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginTop: '20px',
                  marginBottom: '10px',
                  fontFamily: `'Georgia', serif`
                }}
              >
                {data.category}
              </div>

              <h1

                style={{
                  fontFamily: '"Georgia", serif',
                  fontSize: '36px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: 400,
                }}
              >
                {data.title}
              </h1>

              <p
                style={
                  {
                    color: 'rgb(51, 51, 51)',
                    fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
                    fontSize: '17px',
                    fontWeight: 400,
                    marginTop: '12px',
                  }
                }
              >
                {data.shortdescription}
              </p>

              <p style={{ fontWeight: 'bold', marginTop: '20px' }}>
                By {data.author || 'Unknown'}
              </p>

              <button
                type="button"
                className="btn btn-light d-inline-flex align-items-center gap-2 mt-3"
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '50px',
                  padding: '10px 20px',
                  fontSize: '1rem',
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>🎧</span> Listen
              </button>
            </div>
          </div>

          {/* Right: IMAGE SECTION */}
          <div className="col-md-6 d-flex justify-content-center">
            <Image
              src={data.image}
              alt={data.title}
              width={650}
              height={850}
              style={{
                objectFit: 'cover',
                width: '100%',
                maxWidth: '650px',
                height: 'auto',
              }}
              className="img-fluid"
              priority
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
