'use client';
import Image from 'next/image';

interface HeroLeftImageProps {
  data: {
    category?: string;
    title: string;
    shortdescription: string;
    author?: string;
    image: string;
  };
}



export default function HeroLeftImage({ data }: HeroLeftImageProps) {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left - Image Section */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <Image
            src={data.image}
            alt={data.title}
            width={500}
            height={600}
            className="img-fluid"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              maxWidth: '500px',
            }}
            priority
          />
        </div>

        {/* Right - Text Section with Black Background */}
        <div
          className="col-md-6 text-center text-md-start"
          style={{
            backgroundColor: '#000',
            color: '#fff',
            padding: '40px',
            borderRadius: '8px',
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
              fontSize: '2.5rem',
              lineHeight: '1.3',
            }}
          >
            {data.title}
          </h1>

          <p
            style={{
              fontFamily: 'serif',
              fontSize: '1.1rem',
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
            className="btn btn-outline-light d-inline-flex align-items-center gap-2 mt-3"
            style={{
              border: '1px solid #fff',
              borderRadius: '50px',
              padding: '10px 20px',
              fontSize: '1rem',
              color: '#fff',
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>🎧</span> Listen
          </button>
        </div>
      </div>
    </div>
  );
}
