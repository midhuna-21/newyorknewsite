import Image from 'next/image';
import Link from 'next/link';
import { BiCalendar } from 'react-icons/bi';

interface NewsItem {
  title: string;
  shortdescription: string;
  image: string;
  author?: string;
  category?: string;
  slug: string;
  date?: string;
}

export default function DetailFirst({ data }: { data: NewsItem }) {
  return (
    <div id="detail-first" className="border">
      <Link href={`/${data.category}/${data.slug}`} title={data.slug} className="detail-link">
        <div className="content-wrapper">
          {/* TEXT SIDE */}
          <div className="text-side">
            <p className="category">{data.category}</p>
            <h1 className="title">{data.title}</h1>
            <p className="shortdesc">{data.shortdescription}</p>
            <p className="date">
              <BiCalendar size={10} style={{ marginRight: '4px', color: '#000' }} />
              <span className="published-label">Published on</span>
              <span className="published-date">{data.date}</span>
            </p>
          </div>

          {/* IMAGE SIDE */}
          <div className="image-side">
            <div className="image-container">
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="detail-image"
                priority
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
