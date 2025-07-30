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
        maxWidth: '280px',
      }}
    >
      <Link
        title={data.slug}
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
            alt={data.title}
            width={400}
            height={270}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
            sizes="100vw"
          />
        </div>

        {/* <p
          style={{
            fontSize: '12px',
            fontWeight: 400,
            color: '#DB3334',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '8px',
          }}
        >
          {data.category}
        </p> */}

        <p
          style={{
            fontSize: '18px',
            fontWeight: 400,
            color: '#000',
            lineHeight: 1.4,
            marginBottom: '10px',
          }}
        >
          {data.title}
        </p>

        <div
          style={{
            fontSize: '10px',
            marginTop: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <BiCalendar
            size={10}
            style={{ marginRight: '4px', color: '#999' }}
          />
          <span
            style={{
              color: '#c0392b',
              fontWeight: 500,
              fontSize: '8px',
            }}
          >
            Published on
          </span>
          <span
            style={{
              color: '#4d5459',
              marginLeft: '4px',
              fontSize: '8px',
            }}
          >
            {data.date}
          </span>
        </div>
      </Link>
    </div>
  );
}
