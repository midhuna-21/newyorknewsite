'use client';
import Image from 'next/image';
import { BiCalendar } from 'react-icons/bi';

interface HeroLeftImageProps {
  data: {
    category?: string;
    title: string;
    shortdescription: string;
    author?: string;
    image: string;
    date: string;
  };
}

export default function HeroLeftImage({ data }: HeroLeftImageProps) {
  return (
 <div className="container py-5">
  <div className="row align-items-stretch" style={{ minHeight: '500px' }}>
    
    {/* Left - Image */}
    <div className="col-md-6 p-0">
      <div style={{ height: '100%', width: '100%' }}>
        <Image
          src={data.image}
          alt={data.title}
          width={500}
          height={600}
          className="img-fluid"
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }}
          priority
        />
      </div>
    </div>

    {/* Right - Content */}
    <div
      className="col-md-6 d-flex justify-content-center align-items-center text-center"
      style={{
        backgroundColor: '#000',
        color: '#fff',
        padding: '40px',
        borderRadius: '0',
        height: '700px', // match image height
      }}
    >
      <div>
        <div
          style={{
            color: '#fff',
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

        <div style={{ marginTop: '20px' }}>
          <BiCalendar size={10} style={{ marginRight: '4px', color: '#fff' }} />
          <span style={{ color: '#fff', opacity: 0.6, fontSize: '8px' }}>Published on</span>
          <span style={{ color: '#aaa', marginLeft: '4px', fontSize: '8px' }}>{data.date}</span>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
