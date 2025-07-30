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
    slug: string;
  };
}

export default function HeroLeftImage({ data }: HeroLeftImageProps) {
  return (
    <div
      className="py-4"
      style={{
        paddingTop: '20px',
        paddingBottom: '20px',
        marginTop: '40px',      
        marginBottom: '40px',   
      }}
    >
      <Link
        href={`/${data.category}/${data.slug}`}
        title={data.slug}
        className="text-decoration-none"
        style={{ color: 'inherit', display: 'block' }}
      >
        <div
          className="row m-0 align-items-stretch"
          style={{
            minHeight: '500px', 
          }}
        >
          <div className="col-12 col-md-6 order-2 order-md-1 p-0">
            <div style={{ height: '100%', width: '100%' }}>
              <Image
                src={data.image}
                alt={data.title}
                width={700}
                height={500}
                className="img-fluid"
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>

          <div
            className="col-12 col-md-6 order-1 order-md-2 d-flex flex-column justify-content-center align-items-center text-center px-4"
            style={{
              backgroundColor: '#000',
              color: '#fff',
              paddingTop: '40px',
              paddingBottom: '40px',
            }}
          >
            <div className="w-100">
              <p
                className="d-none d-md-block"
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: 400,
                }}
              >
                {data.category}
              </p>
              <p
                className="d-block d-md-none"
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: 400,
                }}
              >
                {data.category}
              </p>

              {/* Title */}
              <h2
                className="d-none d-md-block text-uppercase"
            style={{
                fontFamily: 'Georgia, serif',
                fontSize: '28px',
                letterSpacing: '1px',
                fontWeight: 400,
              }}
              >
                {data.title}
              </h2>
              <h2
                className="d-block d-md-none text-uppercase"
                style={{
                fontFamily: 'Georgia, serif',
                  fontSize: '22px',
                  fontWeight: 400,
                  margin: '10px 0',
                }}
              >
                {data.title}
              </h2>

              {/* Short Description */}
              <p
                className="d-none d-md-block"
              style={{
                fontFamily: 'TNYAdobeCaslonPro, Times New Roman, Times, serif',
                fontSize: '22px',
                fontWeight: 400,
              }}
              >
                {data.shortdescription}
              </p>
              <p
                className="d-block d-md-none"
               style={{
                fontFamily: 'TNYAdobeCaslonPro, Times New Roman, Times, serif',
                fontSize: '18px',
                fontWeight: 400,
              }}
              >
                {data.shortdescription}
              </p>

              {/* Date */}
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ fontSize: '10px', marginTop: '10px' }}
              >
                <BiCalendar
                  size={10}
                  style={{ marginRight: '4px', color: '#fff' }}
                />
                <span
                  style={{
                    color: '#fff',
                    fontWeight: 500,
                    fontSize: '8px',
                  }}
                >
                  Published on
                </span>
                <span
                  style={{
                    color: '#fff',
                    marginLeft: '4px',
                    fontSize: '8px',
                  }}
                >
                  {data.date}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
