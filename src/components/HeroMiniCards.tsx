import Image from 'next/image';
import Link from 'next/link';
import { BiCalendar } from 'react-icons/bi';

interface HeroMiniCardProps {
  data: {
    category: string;
    title: string;
    author?: string;
    image: string;
    date: string;
    slug: string;
  };
}

export default function HeroMiniCards({ data }: HeroMiniCardProps) {
  return (
    <div>
      <Link
        title={`${data.slug}`}
        href={`/${data.category}/${data.slug}`}
        className='text-decoration-none'
        style={{ display: 'flex', width: '100%', textDecoration: 'none', color: 'inherit', }}
      >

        <div className="row">
          <div className="col-12 d-flex">
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  color: '#DB3334',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '10px',
                  fontFamily: `'Georgia', serif`
                }}
              >
                {data.category}
              </p>

              <p
                style={
                  {
                    color: 'rgb(51, 51, 51)',
                    fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
                    fontSize: '17px',
                    fontWeight: 400,
                      marginBottom: '0'
                  }
                }
              >
                {data.title}
              </p>

              <BiCalendar size={10} style={{ marginRight: '4px', color: '#000' }} />
              <span style={{ color: '#000', opacity: 0.6, fontSize: '8px' }}>Published on</span>
              <span style={{ color: '#555', marginLeft: '4px', fontSize: '8px' }}>{data.date}</span>
            </div>

            <div
              style={{
                marginLeft: '10px',
                display: 'flex',
                alignItems: 'center',
                minWidth: '60px',
              }}
            >
              <Image
                src={data.image}
                alt="Thumbnail"
                width={60}
                height={60}
                style={{
                  objectFit: 'cover',
                  width: '60px',
                  height: '60px',
                }}
              />
            </div>

          </div>
        </div>
      </Link>
    </div>
  );
}
