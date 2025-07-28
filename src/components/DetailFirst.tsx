import Image from 'next/image';
import { BiCalendar } from 'react-icons/bi';

interface NewsItem {
  title: string;
  shortdescription?: string;
  image: string;
  author?: string;
  category?: string;
  slug: string;
  date?: string;
}

export default function DetailFirst({ data }: { data: NewsItem }) {
  return (
    <div
      id="detail-first"
      className="container-fluid"
      style={{
        borderBottom: '1px solid #ccc',
        marginTop: '80px',
        padding: '0px',
        backgroundColor: '#fff',
      }}
    >
      <div
        className="row g-0 align-items-stretch"
        style={{
          minHeight: '500px',
        }}
      >
        {/* Text Column */}
        <div
          className="col-12 col-md-6 d-flex flex-column justify-content-center text-center"
          style={{
            padding: '40px 24px',
          }}
        >
          <h1
            style={{
              fontSize: '12px',
              fontWeight: 400,
              color: '#DB3334',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              fontFamily: 'Georgia, serif',
              marginBottom: '16px',
              marginTop: '20px',
            }}
          >
            {data.category}
          </h1>

          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(22px, 5vw, 36px)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              fontWeight: 400,
              lineHeight: 1.2,
              marginBottom: '16px',
            }}
          >
            {data.title}
          </h2>

          <p
            style={{
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(14px, 2vw, 18px)',
              fontWeight: 400,
              lineHeight: 1.6,
              color: '#111',
              marginBottom: '8px',
            }}
          >
            {data.shortdescription}
          </p>

          <div
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '10px',
            }}
          >
            <BiCalendar size={10} style={{ color: '#999', marginRight: '4px' }} />
            <span style={{ color: '#000', opacity: 0.6, fontSize: '8px' }}>Published on</span>
            <span style={{ color: '#555', marginLeft: '4px', fontSize: '8px' }}>{data.date}</span>
          </div>
        </div>

        {/* Image Column */}
        <div
          className="col-12 col-md-6 d-flex align-items-stretch justify-content-center"
          style={{ padding: 0 }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              minHeight: '300px',
            }}
          >
            <Image
              src={data.image}
              alt={data.title}
              fill
              priority
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
  