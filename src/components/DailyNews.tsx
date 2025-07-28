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
 <div
  className="d-flex justify-content-center"
  style={{
    textAlign: 'center',
    padding: '10px 0',
  }}
>
  <Link
    title={`${data.slug}`}
    href={`/${data.category}/${data.slug}`}
    className="text-decoration-none"
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textDecoration: 'none',
      color: 'inherit',
      width: '100%',
      maxWidth: '600px',
      padding: '0 20px',
    }}
  >
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
        fetchPriority="high" 
    />
    <em
      style={{
        color: '#000',
        fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
        fontSize: '22px',
        fontWeight: 400,
        marginBottom: '4px',
        
      }}
    >
      “{data.title}”
    </em>
     <div style={{ fontSize: '10px', marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <BiCalendar
                       size={10}
                       style={{ marginRight: '4px', color: '#999' }}
                     />
                     <span style={{ color: '#c0392b', fontWeight: 500, fontSize: '8px' }}>
                       Published on
                     </span>
                     <span style={{ color: '#4d5459ff', marginLeft: '4px', fontSize: '8px' }}>
                       {data.date}
                     </span>
                   </div>
  </Link>
</div>

  );
}
