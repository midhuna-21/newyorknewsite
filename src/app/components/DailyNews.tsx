'use client';
import Image from 'next/image';

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
        {/* Dynamic Image */}
        <Image
          src={data.image}
          alt={data.title}
          width={1000}
          height={700}
          className="img-fluid"
          style={{
            width: '100%',
            height: 'auto',
            marginBottom: '20px',
          }}
        />

        {/* Dynamic Caption (title as caption) */}
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

        <p
          style={{
            fontSize: '0.9rem',
            color: '#555',
            fontWeight: '500',
          }}
        >
          From the <strong>{data.category}</strong> section
        </p>
      </div>
    </div>
  );
}
