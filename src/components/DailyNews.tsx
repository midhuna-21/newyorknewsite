'use client';
import Image from 'next/image';
import { BiCalendar } from 'react-icons/bi';

interface NewsData {
  category: string;
  title: string;
  shortdescription: string;
  description?: string;
  image: string;
  slug: string;
  date: string;
}

interface DailyNewsProps {
  data: NewsData;
}

export default function DailyNews({ data }: DailyNewsProps) {
  return (
    <div className="container d-flex justify-content-center py-5">
      <div className="col-12 col-md-9 text-center">
        {/* 🔽 Smaller Image */}
        <Image
          src={data.image}
          alt={data.title}
          width={500} // ↓ Reduced width
          height={350} // ↓ Reduced height
          className="img-fluid"
          style={{
            width: '100%',
            maxWidth: '500px', // ✅ Prevents full-width stretch
            height: 'auto',
            marginBottom: '20px',
          }}
        />

        {/* Title */}
        <p
          style={{
            fontStyle: 'italic',
            fontSize: '1.25rem',
            fontFamily: 'Georgia, serif',
            marginBottom: '10px',
          }}
        >
          “{data.title}”
        </p>

        <BiCalendar size={10} style={{ marginRight: '4px', color: '#000' }} />
        <span style={{ color: '#000', opacity: 0.6, fontSize: '8px' }}>Published on</span>
        <span style={{ color: '#aaa', marginLeft: '4px', fontSize: '8px' }}>{data.date}</span>
      </div>
    </div>
  );
}
