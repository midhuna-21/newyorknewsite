'use client';
import Image from 'next/image';
import Link from 'next/link';
import { BiCalendar } from 'react-icons/bi';

interface TrumpCardData {
  category: string;
  title: string;
  shortdescription?: string;
  description?: string;
  image: string;
  slug: string;
  date: string;
}

interface TrumpCardComponentProps {
  data: TrumpCardData;
}

export default function TrumpCardComponent({ data }: TrumpCardComponentProps) {
  return (
    <div>
      <Link
        title={`${data.slug}`}
        href={`/${data.category}/${data.slug}`}
        className='text-decoration-none'
        style={{ display: 'flex', width: '100%', textDecoration: 'none', color: 'inherit', }}
      >
        <div className="py-4 px-3" style={{ fontFamily: 'Georgia, serif', maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ width: '200px', height: '270px', overflow: 'hidden', marginBottom: '20px' }}>
            <img
              src={data.image}
              alt={data.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <p
            style={{
              fontSize: '16px',
              fontWeight: 400,
              color: 'rgb(219, 51, 52)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginBottom: '10px',
              fontFamily: `'Georgia', serif`
            }}
          >
            {data.category}
          </p>
          <h2
            style={
              {
                color: "#000",
                fontFamily: `'Georgia', serif`,
                fontSize: '21px',
                fontWeight: 400,
              }
            }
          >
            {data.title}
          </h2>
          <p
            style={{
              fontWeight: 'bold',
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: '1rem',
              textAlign: 'left',
            }}
          >
            <BiCalendar size={10} style={{ marginRight: '4px', color: '#000' }} />
            <span style={{ color: '#000', opacity: 0.6, fontSize: '8px' }}>Published on</span>
            <span style={{ color: '#555', marginLeft: '4px', fontSize: '8px' }}>{data.date}</span>
          </p>
        </div>
      </Link>
    </div>

  );
}
