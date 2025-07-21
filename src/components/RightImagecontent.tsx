import Image from 'next/image';
import Link from 'next/link';

interface NewsItem {
  title: string;
  shortdescription: string;
  image: string;
  author?: string;
  category?: string;
  slug: string;
}

export default function RightImageContent({ data }: { data: NewsItem }) {
  return (
    <div id="right-image-content" className='py-4'>
      <Link
        href={`/${data.category}/${data.slug}`}
        title={data.slug}
        className="text-decoration-none text-reset"
      >
        <div
          className="row flex-column flex-lg-row align-items-center"
          style={{ marginTop: '24px', marginBottom: '24px' }} 
        >
          <div
            className="col-lg-6 text-center order-2 order-lg-2 content-image-column"
            style={{ marginTop: 0, paddingTop: 0 }}
          >
            <Image
              src={data.image}
              alt={data.title}
              width={650}
              height={850}
              className="img-fluid"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
              priority
            />
          </div>

          {/* TEXT SIDE */}
          <div
            className="col-lg-6 d-flex justify-content-center align-items-center text-center order-1 order-lg-1 content-column"
            style={{
              paddingTop: 24,
              paddingBottom: 24,
            }}
          >
            <div className="px-3" style={{ maxWidth: '90%' }}>
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  color: 'rgb(219, 51, 52)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginTop: 20,
                  marginBottom: 10,
                  fontFamily: 'Georgia, serif',
                }}
              >
                {data.category}
              </p>

              <h1
                className="title"
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '36px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: 400,
                }}
              >
                {data.title}
              </h1>

              <p
                className="shortdesc"
                style={{
                  color: 'rgb(51, 51, 51)',
                  fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
                  fontSize: '17px',
                  fontWeight: 400,
                  marginTop: 12,
                  marginBottom: 0,
                }}
              >
                {data.shortdescription}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
