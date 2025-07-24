import React from 'react';

interface SectionWrapperProps {
  title: string;
  children: React.ReactNode;
}

export default function SectionWrapper({ title, children }: SectionWrapperProps) {
  return (
    <div className="section-wrapper">
      <hr style={{ borderTop: '1px solid #ccc' }} />
      
      <p
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
      </p>

      <div
        className="section-children"
        style={{ marginTop: '1.5rem' }}
      >
        {children}
      </div>
    </div>
  );
}
