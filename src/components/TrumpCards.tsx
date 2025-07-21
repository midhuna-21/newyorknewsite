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
  const fixedFourCards = data.slice(0, 4);

  return (
    <div>
      <div
        className="d-flex d-lg-none"
        style={{
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth',
        }}
      >
        {fixedFourCards.map((item, index) => (
          <div
            key={index}
            style={{
              scrollSnapAlign: 'start',
              flexShrink: 0,
              width: '100vw',
              display: 'flex',
              justifyContent: 'center',
              padding: '0.5rem 0', 
              boxSizing: 'border-box',
            }}
          >
            <TrumpCardComponent data={item} />
          </div>
        ))}
      </div>

      <div className="row justify-content-center d-none d-lg-flex">
        {fixedFourCards.map((item, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-lg-3 d-flex flex-column align-items-center position-relative"
            style={{ padding: '0 10px' }}
          >
            <TrumpCardComponent data={item} />

            {index < fixedFourCards.length - 1 && (
              <div
                style={{
                  position: 'absolute',
                  right: '-1px',
                  height: 'calc(65% - 40px)',
                  width: '1px',
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
