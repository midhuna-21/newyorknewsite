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
      <div className="row align-items-center">
        {/* Left - Text Section */}
        <div className="col-md-6 text-center text-md-start">
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
            className="btn btn-light d-inline-flex align-items-center gap-2"
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

        {/* Right - Image Section */}
        <div className="col-md-6 text-center mt-4 mt-md-0">
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
      </div>
    </div>
  );
}
