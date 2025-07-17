  'use client';
  import Image from 'next/image';
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
  <div className="py-4 px-3" style={{ fontFamily: 'Georgia, serif', maxWidth: '600px', margin: '0 auto' }}>
  {/* Image */}
  <div style={{ width: '200px', height: '270px', overflow: 'hidden', marginBottom: '20px' }}>
    <img
      src={data.image}
      alt={data.title}
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
  </div>

  {/* Category */}
  <p
    style={{
      color: 'firebrick',
      textTransform: 'uppercase',
      fontWeight: '500',
      fontSize: '0.85rem',
      marginBottom: '10px',
      textAlign: 'left',
    }}
  >
    {data.category}
  </p>

  {/* Title */}
  <h2
    style={{
      fontSize: '1.8rem',
      fontWeight: 'normal',
      marginBottom: '15px',
      textAlign: 'left',
    }}
  >
    {data.title}
  </h2>

  {/* Short Description */}
  <p
    style={{
      fontSize: '1rem',
      lineHeight: '1.6',
      marginBottom: '20px',
      color: '#444',
      textAlign: 'left',
    }}
  >
    {data.shortdescription}
  </p>

  {/* Date */}
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
    <span style={{ color: '#aaa', marginLeft: '4px', fontSize: '8px' }}>{data.date}</span>
  </p>
</div>

    );
  }
