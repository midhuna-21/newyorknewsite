'use client';
import Image from 'next/image';
import { BiCalendar } from 'react-icons/bi';

interface FeaturedStoryProps {
  data: {
    category: string;
    title: string;
    shortdescription?: string;
    description: string;
    image: string;
    slug: string;
    date: string;
  };
}

export default function FeaturedStory({ data }: FeaturedStoryProps) {
  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f6f1' }}>
      <div className="container">
        <div className="row">

          <div className="col-lg-6 mb-4 mb-lg-0">
            <div style={{ paddingBottom: '20px', paddingRight: "20px", paddingLeft: '20px', textAlign: 'center' }}>
              <p style={{
                textTransform: 'uppercase',
                fontSize: '0.9rem',
                fontFamily: 'Georgia, serif',
                marginBottom: '20px',
              }}>
                {data.category}
              </p>

              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', fontStyle: 'italic', marginBottom: '15px' }}>
                "{data.title}"
              </h2>
              <Image
                src={data.image}
                alt={data.title}
                width={250}
                height={500}
                style={{
                  width: '100%',
                  maxWidth: '250px',
                  height: 'auto',
                  border: '1px solid #ddd',
                  objectFit: 'cover',
                }}
                className="img-fluid"
              />
              <div style={{ marginTop: '10px' }}>
                <BiCalendar size={10} style={{ marginRight: '4px', color: '#000' }} />
                <span style={{ color: '#000', opacity: 0.6, fontSize: '8px' }}>Published on</span>
                <span style={{ color: '#aaa', marginLeft: '4px', fontSize: '8px' }}>{data.date}</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.7' }}>
              <span
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  float: 'left',
                  lineHeight: '1',
                  marginRight: '10px',
                }}
              >
                {data.description.charAt(0)}
              </span>
              {data.description.slice(1, 750)}...
            </p>

            <a
              href={`/${data.category}/${data.slug}`}
              style={{
                color: '#0074cc',
                textDecoration: 'none',
                fontFamily: 'Georgia, serif',
                fontSize: '1.1rem',
              }}
            >
              Continue reading »
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
