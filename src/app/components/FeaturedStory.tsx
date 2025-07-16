'use client';
import Image from 'next/image';

interface FeaturedStoryProps {
  data: {
    category: string;
    title: string;
    shortdescription: string;
    description?: string;
    image: string;
    slug: string;
    date: string;
  };
}

export default function FeaturedStory({ data }: FeaturedStoryProps) {
  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#f8f6f1' }}>
      <div className="container">
        <div className="row">
          {/* Left Image Section */}
          <div className="col-lg-5 text-center mb-4 mb-lg-0">
            <Image
              src={data.image}
              alt={data.title}
              className="img-fluid"
              width={500}
              height={600}
              style={{ width: '100%', height: 'auto', border: '1px solid #ddd' }}
            />
            <h5 style={{ marginTop: '20px', fontFamily: 'Georgia, serif', fontWeight: 'bold', textTransform: 'uppercase' }}>
              By The New Yorker Staff
            </h5>
            <p style={{ color: '#888', fontSize: '0.9rem' }}>
              Photograph by Sarah Meftah for The New Yorker
            </p>
          </div>

          {/* Right Content Section */}
          <div className="col-lg-7">
            <p style={{ textTransform: 'uppercase', fontSize: '0.9rem', fontFamily: 'Georgia, serif' }}>
              {data.category}
            </p>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', fontStyle: 'italic' }}>
              {data.title}
            </h2>
            <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: '1.7' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 'bold', float: 'left', lineHeight: '1', marginRight: '10px' }}>
                {data.shortdescription}
              </span>
           </p>

            {/* Bottom Sub-content Row */}
            <div className="row pt-4 mt-4 border-top">
              <div className="col-md-6">
                <p style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>This Week in Health</p>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: '1rem' }}>
                  A new study on mental health & screen habits
                </p>
                <Image
                  src={data.image}
                  alt="Thumb"
                  width={60}
                  height={60}
                  style={{ border: '2px solid red', borderRadius: '4px' }}
                />
              </div>
              <div className="col-md-6">
                <p style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>The Writer’s Voice</p>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: '1rem' }}>
                  The Author Reads<br />“{data.title}”
                </p>
                <Image
                  src={data.image}
                  alt="Thumb"
                  width={60}
                  height={60}
                  style={{ borderRadius: '4px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
