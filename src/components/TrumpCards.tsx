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
          paddingBottom: '10px',
        }}
      >
        {fixedFourCards.map((item, index) => (
          <div
            key={index}
            style={{
              scrollSnapAlign: 'start',
              flexShrink: 0,
              minWidth: '80%',
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

      <div className="container d-none d-lg-block">
        <div className="row justify-content-center">
          {fixedFourCards.map((item, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center"
              style={{
                padding: '10px 0',
                position: 'relative',
              }}
            >
              <TrumpCardComponent data={item} />

              {index < fixedFourCards.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    height: '65%',
                    width: '1px',
                    backgroundColor: '#eee',
                  }}
                />
              )}

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
