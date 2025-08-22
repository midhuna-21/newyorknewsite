import React from 'react';

interface ArticleParagraphProps {
  data: {
    description?: string;
    date: string;
  };
}

const ArticleParagraphWith = ({ data }: ArticleParagraphProps) => {
  const description = data.description ?? '';
  if (!description) return null;

  const sentences = description.split('. ');
  const paragraphs: string[] = [];

  for (let i = 0; i < sentences.length; i += 3) {
    const chunk = sentences.slice(i, i + 3).join('. ') + '.';
    paragraphs.push(chunk); 
  }

  return (
    <div
      style={{
        margin: '0 auto',
        padding: '1rem',
        maxWidth: '960px',
      }}
    >
      {paragraphs.map((text, index) => (
        <p
          key={index}
          style={{
            fontFamily: '"Times New Roman", Times, serif',
            fontSize: '21px',
            lineHeight: 1.6,
            color: '#000',
            marginBottom: '1.2rem',
            textAlign: 'justify',
          }}
        >
          {index === 0 ? (
            <>
              <span
                style={{
                  float: 'left',
                  fontSize: '56px',
                  fontWeight: 600,
                  lineHeight: 1,
                  paddingRight: '6px',
                }}
              >
                {text.charAt(0)}
              </span>
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
