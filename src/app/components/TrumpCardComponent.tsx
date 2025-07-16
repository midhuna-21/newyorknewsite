'use client';
import Image from 'next/image';

interface TrumpCardData {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
  date: string;
}

interface TrumpCardComponentProps {
  data: TrumpCardData;
}

export default function TrumpCardComponent({ data }: TrumpCardComponentProps) {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12 col-sm-10 col-md-6 col-lg-4">
          <div style={{ textAlign: 'center' }}>
            {/* Image */}
            <div style={{ position: 'relative' }}>
              <Image
                src={data.image}
                alt={data.title}
                width={300}
                height={400}
                className="img-fluid"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  backgroundColor: '#f5f5f5',
                  padding: '10px',
                }}
                priority
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  background: '#fff',
                  borderRadius: '6px',
                  padding: '4px 6px',
                  fontSize: '14px',
                  boxShadow: '0 0 4px rgba(0,0,0,0.2)',
                }}
              >
                🎧
              </div>
            </div>

            <p
              style={{
                color: 'firebrick',
                fontWeight: '500',
                marginTop: '20px',
                letterSpacing: '0.5px',
              }}
            >
              {data.category.toUpperCase()}
            </p>

            <h5
              style={{
                fontFamily: 'Georgia, serif',
                fontWeight: '500',
                fontSize: '1.25rem',
                lineHeight: '1.4',
              }}
            >
              {data.title}
            </h5>

            <p
              style={{
                fontWeight: 'bold',
                fontSize: '0.95rem',
                marginTop: '10px',
              }}
            >
              By The New Yorker
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
