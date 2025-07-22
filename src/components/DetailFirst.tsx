import Image from 'next/image';
import Link from 'next/link';
import { BiCalendar } from 'react-icons/bi';

interface NewsItem {
  title: string;
  shortdescription: string;
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
      style={{ border: '1px solid #ccc', padding: '60px', marginTop: '80px' }}
    >
    

      <Link
        href={`/${data.category}/${data.slug}`}
        title={data.slug}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          {/* TEXT SIDE */}
          <div className="text-side">
            <p className="category">{data.category}</p>
            <h2 className="title">{data.title}</h2>
            <p className="shortdesc">{data.shortdescription}</p>
            <p className="date">
              <BiCalendar size={10} style={{ marginRight: '4px', color: '#000' }} />
              <span className="published-label">Published on</span>{' '}
              <span className="published-date">{data.date}</span>
            </p>
          </div>

          {/* IMAGE Content */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image
              src={data.image}
              alt={data.title}
              width={600}
              height={500}
              style={{ maxWidth: '100%', height: 'auto' }}
              priority
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
