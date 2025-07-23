import Image from 'next/image';
import Link from 'next/link';
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
      style={{ border: '1px solid #ccc', padding: '60px', marginTop: '80px' }}
    >     
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          <div className="text-side">
            <h1
             className="category">{data.category}</h1>
            <h2 className="title">{data.title}</h2>
            <p className="shortdesc">{data.shortdescription}</p>
            <p className="date">
              <BiCalendar size={10} style={{ marginRight: '4px', color: '#000' }} />
            <span style={{ color: '#000', opacity: 0.6, fontSize: '8px' }}>Published on</span>
      <span style={{ color: '#555', marginLeft: '4px', fontSize: '8px' }}>{data.date}</span>
            </p>
          </div>

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
    </div>
  );
}
