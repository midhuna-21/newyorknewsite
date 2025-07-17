'use client';
import Image from 'next/image';

interface NewsItem {
  title: string;
  shortdescription: string;
  image: string;
  author?: string;
  category?: string;
}

export default function RigtImageContent({ data }: { data: NewsItem }) {
  return (
    <div className="container py-5">
      <div className="row">
        {/* Left: CENTERED CONTENT — vertically in the row */}
        <div
          className="col-md-6 d-flex flex-column justify-content-center"
          style={{
            height: '100%', // let it adapt, not force full height
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
                color: 'red',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '20px',
              }}
            >
              {data.category || 'Category'}
            </div>

            <h1
              style={{
                fontFamily: 'serif',
                fontWeight: 500,
                fontSize: '2.8rem',
                lineHeight: '1.2',
              }}
            >
              {data.title}
            </h1>

            <p
              style={{
                fontFamily: 'serif',
                fontSize: '1.2rem',
                marginTop: '20px',
              }}
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

        {/* Right: IMAGE SECTION — taller than text */}
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
    </div>
  );
}
