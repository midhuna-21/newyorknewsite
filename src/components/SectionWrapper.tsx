import React from 'react';

interface SectionWrapperProps {
  title: string;
  children: React.ReactNode;
}

export default function SectionWrapper({ title, children }: SectionWrapperProps) {
  return (
    <div id="section-wrapper">
      <hr style={{ borderTop: '1px solid #ccc' }} />
      
      <h2
        className="section-title text-center"
        style={{
          color: "#000",
          fontFamily: '"Cinzel", serif',
          fontWeight: 400,
          fontSize: '28px',
          textTransform: 'uppercase',
        }}
      >
        {title}
      </h2>

      <div
        className="section-children"
        style={{ marginTop: '1.5rem' /* ~mt-4 */ }}
      >
        {children}
      </div>
    </div>
  );
}
