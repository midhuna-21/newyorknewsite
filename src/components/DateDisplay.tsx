import React from 'react';
import { BiCalendar } from 'react-icons/bi';

const DateDisplay = ({ date }: { date: string }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        fontSize: '0.75rem', 
        color: '#666',
        fontWeight: 400,
        fontFamily: '"Georgia", serif',
        paddingLeft: '6px',
        letterSpacing: '0.2px',
      }}
    >
      <BiCalendar size={12} style={{ marginRight: '6px', color: '#999' }} />
      <span>
        <span style={{ color: '#444', fontWeight: 500 }}>Published:</span>{' '}
        <span style={{ color: '#222' }}>{date}</span>
      </span>
    </div>
  );
};

export default DateDisplay;
