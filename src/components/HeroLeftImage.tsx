'use client';
import Image from 'next/image';
import Link from 'next/link';
import { BiCalendar } from 'react-icons/bi';

interface HeroLeftImageProps {
  data: {
    category?: string;
    title: string;
    shortdescription: string;
    author?: string;
    image: string;
    date: string;
    slug:string;
  };
}

export default function HeroLeftImage({ data }: HeroLeftImageProps) {
  return (
 <div className="container py-5">
   <Link
                title={`${data.slug}`}
                href={`/${data.category}/${data.slug}`}
                className='text-decoration-none'
                style={{ display: 'flex', width: '100%', textDecoration: 'none', color: 'inherit', }}
            >

  <div className="row align-items-stretch" style={{ minHeight: '500px' }}>
    <div className="col-md-6 p-0">
      <div style={{ height: '100%', width: '100%' }}>
        <Image
          src={data.image}
          alt={data.title}
          width={500}
          height={600}
          className="img-fluid"
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }}
          priority
        />
      </div>
    </div>

    {/* Right - Content */}
    <div
      className="col-md-6 d-flex justify-content-center align-items-center text-center"
      style={{
        backgroundColor: '#000',
        color: '#fff',
        padding: '40px',
        borderRadius: '0',
        height: '700px', 
      }}
      >
      <div>
        <div
          style={{
                  fontFamily: '"Georgia", serif',
                  fontSize: '36px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: 400,
                }}
          >
          {data.category}
        </div>

        <h1
          style={{
                  color: "#fff",
                  fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
                  fontSize: '21px',
                  fontWeight: 400,
                  maxWidth: '500px',
                  margin: '0 auto',
                }}
          >
          {data.title}
        </h1>
        <p
          style={{
            color: "#fff",
                  fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
                  fontSize: '17px',
                  fontWeight: 400,
                  maxWidth: '500px',
                  margin: '0 auto',
          }}
          >
          {data.shortdescription}
        </p>

        <div>
          <BiCalendar size={10} style={{ marginRight: '4px', color: '#fff' }} />
          <span style={{ color: '#fff', opacity: 0.6, fontSize: '8px' }}>Published on</span>
          <span style={{ color: '#555', marginLeft: '4px', fontSize: '8px' }}>{data.date}</span>
        </div>
      </div>
    </div>
  </div>
          </Link>
</div>

  );
}
