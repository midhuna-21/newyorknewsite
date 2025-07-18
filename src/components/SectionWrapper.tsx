import React from 'react';

interface SectionWrapperProps {
  title: string;
  children: React.ReactNode;
}

export default function SectionWrapper({ title, children }: SectionWrapperProps) {
  return (
    <div className="container my-5">
      <hr style={{ borderTop: '1px solid #ccc' }} />
      <h2
        className="text-center mt-4"
        style={{
          color:"#000",
          fontFamily: '"Cinzel", serif',
          fontWeight: 400,
          fontSize: '28px',
          textTransform: 'uppercase',
        }}
      >
        {title}
      </h2>

      <div className="mt-5">
        {children}
      </div>
    </div>
  );
}
