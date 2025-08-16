import Image from 'next/image';
import Link from 'next/link';
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
    <div className="py-5" >
      <div style={{ backgroundColor: '#f8f6f1', padding: '20px' }}>
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 mb-4 mb-lg-0 d-flex flex-column align-items-center text-center" >
            <p
              style={{
                fontSize: '12px',
                fontWeight: 400,
                color: '#000',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                fontFamily: 'Georgia, serif',
                marginBottom: '10px',
              }}
            >
              {data.category}
            </p>
            <Link
              title={`${data.slug}`}
              href={`/${data.category}/${data.slug}`}
              className='text-decoration-none'
              style={{ display: 'flex', width: '100%', textDecoration: 'none', color: 'inherit' }}
            >

              <h2
                style={{
                  fontFamily: '"Georgia", serif',
                  fontSize: '22px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: 400,
                  marginBottom: '10px',
                }}
                className='hover-underline'
              >
                "{data.title}"
              </h2>
            </Link>
            <Image
              src={data.image}
              alt={data.title}
              title={data.title}
              width={300}
              height={450}
              style={{
                width: '100%',
                maxWidth: '250px',
                height: 'auto',
                aspectRatio: '2 / 3',
                objectFit: 'cover',
                border: '1px solid #ddd',
              }}
              className="img-fluid"
            />
            <div style={{ fontSize: '10px', marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BiCalendar
                size={10}
                style={{ marginRight: '4px', color: '#000' }}
              />
              <span style={{ color: '#000', fontWeight: 500, fontSize: '8px' }}>
                Published on
              </span>
              <span style={{ color: '#000', marginLeft: '4px', fontSize: '8px' }}>
                {data.date}
              </span>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <p
              style={{
                fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
                fontSize: '18px',
                lineHeight: '1.7',
              }}
            >
              <span
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 400,
                  float: 'left',
                  lineHeight: '1',
                  marginRight: '10px',
                }}
              >
                {data.description.charAt(0)}
              </span>
              {data.description.slice(1, 550)}...
            </p>

            <Link
              title={`${data.slug}`}
              href={`/${data.category}/${data.slug}`}
              style={{
                color: '#0059A9',
                textDecoration: 'none',
                fontFamily: 'Georgia, serif',
                fontSize: '1.1rem',
              }}
            >
              Continue reading »
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
