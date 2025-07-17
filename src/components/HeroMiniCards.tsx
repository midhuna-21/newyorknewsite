'use client';
import Image from 'next/image';
import { BiCalendar } from 'react-icons/bi';

interface HeroMiniCardProps {
  data: {
    category: string;
    title: string;
    author?: string;
    image: string;
    date:string;
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

             <BiCalendar size={10} style={{ marginRight: '4px', color: '#000' }} />
                            <span style={{ color: '#000', opacity: 0.6, fontSize: '8px' }}>Published on</span>
                            <span style={{ color: '#aaa', marginLeft: '4px', fontSize: '8px' }}>{data.date}</span>
          </div>

          {/* Right Image */}
         {/* Right Image */}
<div
  style={{
    marginLeft: '10px',
    display: 'flex',
    alignItems: 'center',
    minWidth: '60px',
  }}
>
  <Image
    src={data.image}
    alt="Thumbnail"
    width={60}
    height={60}
    style={{
      borderRadius: '2px',
      objectFit: 'cover',
      width: '60px',
      height: '60px',
    }}
  />
</div>

        </div>
      </div>
    </div>
  );
}
