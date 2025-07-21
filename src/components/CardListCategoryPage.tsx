import React from 'react';
import NewsCardWithCategory from './NewsCardWithCategory';

interface NewsCardProps {
  data: Array<{
    category: string;
    title: string;
    shortdescription?: string;
    description?: string;
    image: string;
    slug: string;
    date: string;
  }>;
}

const CardListCategoryPage = ({ data }: NewsCardProps) => {
  const displayItems = data.slice(0, 4); 

  return (
    <div>
      <div className="row">
        {displayItems.map((item, index) => (
          <div key={index} className="col-12 col-lg-3 mb-2">
            <NewsCardWithCategory data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardListCategoryPage;
