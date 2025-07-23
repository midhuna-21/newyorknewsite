import React from 'react';

interface ArticleParagraphProps {
  data: {
    description?: string;
  };
}


const ArticleParagraphWith = ({ data }: ArticleParagraphProps) => {
  console.log(data,'dataa')
  const description = data.description ?? '';
  if (!description) return null;

  const sentences = description.split('. ');
  const paragraphs: string[] = [];

  for (let i = 0; i < sentences.length; i += 3) {
    const chunk = sentences.slice(i, i + 3).join('. ') + '.';
    paragraphs.push(chunk);
  }

  return (
    <div className="article-paragraph-container">
      {paragraphs.map((text, index) => (
        <p key={index} className="article-paragraph">
          {index === 0 ? (
            <>
              <span
               className="article-dropcap">{text.charAt(0)}</span>
              {text.slice(1)}
            </>
          ) : (
            text
          )}
        </p>
      ))}
    </div>
  );
};

export default ArticleParagraphWith;
