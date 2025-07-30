import React from 'react';

interface FavoriteItem {
  title: string;
  slug: string;
  category: string;
}

interface FavoritesListProps {
  data: FavoriteItem[];
}

const FavoritesList: React.FC<FavoritesListProps> = ({ data }) => {
  return (
    <div className="container py-5">
      <h2
        className="mb-3"
        style={{
          fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
          fontWeight: 400,
          fontSize: '31px',
        }}
      >
        <span className="d-none d-md-inline" style={{color:'#000'}}>Nystate News Favorites</span>
        <span className="d-inline d-md-none" style={{ fontSize: '24px',color:'#000' }}>
          Nystate News Favorites
        </span>
      </h2>

      <hr />

      <ul
        className="mb-4"
        style={{
          listStyle: 'disc',
          paddingLeft: '20px',
          fontFamily: 'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
          color: '#000',
        }}
      >
        {data.map((item, index) => (
          <li
            key={index}
            className="mb-3"
            style={{
              fontSize: '21px',
            }}
          >
            <a
              title={item.slug} 
              href={`/${item.category}/${item.slug}`}
              style={{
                color: 'black',
                textDecoration: 'underline',
              }}
            >
              <span className="d-none d-md-inline">{item.title}</span>
              <span className="d-inline d-md-none" style={{ fontSize: '16px' }}>
                {item.title}
              </span>
            </a>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default FavoritesList;
