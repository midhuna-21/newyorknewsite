import Image from 'next/image';
import { BiCalendar } from 'react-icons/bi';
import DateDisplay from './DateDisplay';

interface NewsItem {
  title: string;
  shortdescription?: string;
  image: string;
  author?: string;
  category?: string;
  slug: string;
  date?: string;
}

export default function DetailFirst({ data }: { data: NewsItem }) {
  return (
    <div id="detail-first">
      <div className="content-wrapper">
        <div className="text-side">
          <h1 className="category">{data.category}</h1>
          <h2 className="title">{data.title}</h2>
          <p className="shortdesc">{data.shortdescription}</p>
          
            <DateDisplay date='5th July 2025' />
        </div>

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
    </div>
  );
}
