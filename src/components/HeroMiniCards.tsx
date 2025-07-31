import Image from 'next/image';
import Link from 'next/link';
import { BiCalendar } from 'react-icons/bi';

interface HeroMiniCardProps {
  data: {
    category: string;
    title: string;
    author?: string;
    image: string;
    date: string;
    slug: string;
  };
}

export default function HeroMiniCards({ data }: HeroMiniCardProps) {
  return (
    <Link
      title={`${data.slug}`}
      href={`/${data.category}/${data.slug}`}
      className="text-decoration-none"
      style={{
        display: 'block',
        width: '100%',
        color: 'inherit',
      }}
    >
      <div className="d-flex w-100">
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontSize: '12px',
              fontWeight: 400,
              color: '#DB3334',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginBottom: '10px',
              fontFamily: 'Georgia, serif',
            }}
          >
            {data.category}
          </p>

          <p
            style={{
              color: '#333',
              fontFamily: 'Times New Roman, serif',
              fontSize: '17px',
              fontWeight: 400,
              marginBottom: '0',
            }}
            className='hover-underline'
          >
            {data.title}
          </p>

          <div
            style={{
              fontSize: '10px',
              marginTop: '10px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <BiCalendar size={10} style={{ marginRight: '4px', color: '#999' }} />
            <span style={{ color: '#c0392b', fontWeight: 500, fontSize: '8px' }}>
              Published on
            </span>
            <span style={{ color: '#4d5459', marginLeft: '4px', fontSize: '8px' }}>
              {data.date}
            </span>
          </div>
        </div>

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
              objectFit: 'cover',
              width: '60px',
              height: '60px',
            }}
          />
        </div>
      </div>
    </Link>
  );
}
