'use client';
import TrumpCardComponent from './TrumpCardComponent';

interface TrumpCardData {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
  date: string;
}

interface TrumpCardsProps {
  data: TrumpCardData[];
}

export default function TrumpCards({ data }: TrumpCardsProps) {
  return (
    <div className="container py-5">
      <div className="d-flex gap-3 overflow-auto">
        {data.map((item, index) => (
          <div key={index} className="d-flex gap-3 align-items-stretch">
            <TrumpCardComponent data={item} />
            {index < data.length - 1 && (
              <div
                style={{
                  width: '1px',
                  backgroundColor: '#ccc',
                  height: 'auto',
                }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
