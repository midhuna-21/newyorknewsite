'use client';
import TrumpCardComponent from './TrumpCardComponent';

interface TrumpCardData {
  category: string;
  title: string;
  shortdescription: string;
  description?: string;
  image: string;
  slug: string;
  date: string;
}

interface TrumpCardsProps {
  data: TrumpCardData[];
}

export default function TrumpCards({ data }: TrumpCardsProps) {
  // Limit to first 4 cards only
  const fixedFourCards = data.slice(0, 4);

  return (
    <div className="container py-5">
      <div className="row">
        {fixedFourCards.map((item, index) => (
          <div key={index} className="col-3 position-relative d-flex justify-content-center">
            <TrumpCardComponent  data={{
                category: item.category,
                title: item.title,
                image: item.image,
                slug: item.slug,
                date: item.date,
              }} />

            {/* Vertical divider between cards (except after the last card) */}
            {index < fixedFourCards.length - 1 && (
             <div
                style={{
                  position: 'absolute',
                  top: '30px', 
                  right: '0',
                  height: '260px',
                  width: '0.5px',
                  backgroundColor: '#eee',
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
