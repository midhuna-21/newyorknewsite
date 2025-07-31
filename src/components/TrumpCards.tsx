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
      {/* Mobile View */}
      <div
        className="d-flex d-sm-none"
        style={{
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth',
          paddingBottom: '10px',
          scrollbarWidth: 'thin', 
          scrollbarColor: '#ccc transparent',
        }}
      >
        {fixedFourCards.map((item, index) => (
          <div
            key={index}
            style={{
              scrollSnapAlign: 'start',
              flexShrink: 0,
              minWidth: '90%',
              maxWidth: '90%',
              display: 'flex',
              justifyContent: 'center',
              padding: '0 10px',
              boxSizing: 'border-box',
            }}
          >
            <TrumpCardComponent data={item} />
          </div>
        ))}
      </div>

      {/* Tablet View */}
      <div
        className="d-none d-sm-flex d-lg-none"
        style={{
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth',
          paddingBottom: '10px',
          scrollbarWidth: 'thin', 
          scrollbarColor: '#ccc transparent', 
        }}
      >
        {fixedFourCards.map((item, index) => (
          <div
            key={index}
            style={{
              scrollSnapAlign: 'start',
              flexShrink: 0,
              minWidth: '33%',
              maxWidth: '50%',
              display: 'flex',
              justifyContent: 'center',
              padding: '0 10px',
              boxSizing: 'border-box',
            }}
          >
            <TrumpCardComponent data={item} />
          </div>
        ))}
      </div>

      {/* Desktop View */}
      <div className="container d-none d-lg-block">
        <div className="d-flex flex-wrap justify-content-center">
          {fixedFourCards.map((item, index) => (
            <div
              key={index}
              style={{
                flex: '1 1 25%',
                maxWidth: '25%',
                minWidth: '220px',
                padding: '10px',
                boxSizing: 'border-box',
                position: 'relative',
              }}
            >
              <TrumpCardComponent data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
