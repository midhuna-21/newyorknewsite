
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
    <div
      style={{
        fontFamily: 'Georgia, serif',
        width: '100%',
      }}
      className="trump-card"
      id="trump-card"
    >
      <Link
        title={`${data.slug}`}
        href={`/${data.category}/${data.slug}`}
        className="text-decoration-none"
        style={{
          textDecoration: 'none',
          color: 'inherit',
          display: 'block',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '270px',
            overflow: 'hidden',
            marginBottom: '16px',
          }}
        >
          <Image
            src={data.image}
            alt={data.title ?? 'Image'}
            width={400}
            height={300}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
            sizes="(max-width: 768px) 100vw, 400px"
            priority
          />

        </div>

        <p
          style={{
            fontSize: '12px',
            fontWeight: 400,
            color: 'rgb(219, 51, 52)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '8px',
          }}
        >
          {data.category}
        </p>

        <p
          style={{
            fontSize: '18px',
            fontWeight: 400,
            color: '#000',
            fontFamily: `'Georgia', serif`,
            marginBottom: '10px',
            lineHeight: '1.4',
          }}
        >
          {data.title}
        </p>

        <p style={{ fontWeight: 'bold', fontSize: '0.9rem', textAlign: 'left' }}>
          <BiCalendar size={10} style={{ marginRight: '4px', color: '#000' }} />
          <span style={{ color: '#000', opacity: 0.6, fontSize: '8px' }}>Published on</span>
          <span style={{ color: '#555', marginLeft: '4px', fontSize: '8px' }}>{data.date}</span>
        </p>
      </Link>
    </div>
  );
}
