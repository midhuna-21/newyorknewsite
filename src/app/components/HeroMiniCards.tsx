'use client';
import Image from 'next/image';

interface HeroMiniCardProps {
  data: {
    category: string;
    title: string;
    author?: string;
    image: string;
  };
}


export default function HeroMiniCards({ data }: HeroMiniCardProps) {
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-12 d-flex">
          {/* Left Content */}
          <div style={{ flex: 1 }}>
            {/* Category/Label */}
            <p style={{
              color: 'firebrick',
              textTransform: 'uppercase',
              fontWeight: '500',
              fontSize: '0.85rem',
              marginBottom: '5px'
            }}>
              {data.category}
            </p>

            {/* Headline */}
            <p style={{
              fontSize: '1.1rem',
              fontFamily: 'Georgia, serif',
              marginBottom: '10px'
            }}>
              {data.title}
            </p>

            {/* Author */}
            <p style={{
              fontWeight: 'bold',
              fontSize: '1rem',
              marginBottom: 0
            }}>
              By {data.author}
            </p>
          </div>

          {/* Right Image */}
          <div style={{ marginLeft: '10px', position: 'relative', minWidth: '80px' }}>
            <Image
              src={data.image}
              alt="Thumbnail"
              width={80}
              height={80}
              style={{
                borderRadius: '2px',
                objectFit: 'cover',
                width: '80px',
                height: '80px'
              }}
            />
            {/* Optional Audio Icon */}
            {/* {data.hasAudio && (
              <div style={{
                position: 'absolute',
                bottom: '5px',
                right: '5px',
                background: 'white',
                borderRadius: '6px',
                padding: '2px 5px',
                fontSize: '12px',
                boxShadow: '0 0 3px rgba(0,0,0,0.2)'
              }}>
                🎧
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
