'use client';
import Image from 'next/image';
import Link from 'next/link';
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
      <Link
        title={`${data.slug}`}
        href={`/${data.category}/${data.slug}`}
        className='text-decoration-none'
        style={{ display: 'flex', width: '100%', textDecoration: 'none', color: 'inherit', }}
      >

        <div className="col-12 col-md-9 text-center">
          <Image
            src={data.image}
            alt={data.title}
            width={500}
            height={350}
            className="img-fluid"
            style={{
              width: '100%',
              maxWidth: '500px',
              height: 'auto',
              marginBottom: '20px',
            }}
          />
          <br />
          <em
            style={
              {
                color: "#000",
                fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
                fontSize: '22px',
                fontWeight: 400,
              }
            }
          >
            “{data.title}”
          </em>
          <br />
          <BiCalendar size={10} style={{ marginRight: '4px', color: '#000' }} />
          <span style={{ color: '#000', opacity: 0.6, fontSize: '8px' }}>Published on</span>
          <span style={{ color: '#555', marginLeft: '4px', fontSize: '8px' }}>{data.date}</span>
        </div>
      </Link>
    </div>
  );
}
