import React from 'react';

export default function TextPill({ children }) {
  return (
    <div
      style={{
        padding: '8px 16px',
        borderRadius: '30px',
        backgroundColor: '#333',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
        marginRight: 8,
      }}
    >
      {children}
    </div>
  );
}
