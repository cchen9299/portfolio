import React, { useState } from 'react';
import styled from 'styled-components';

export default function ProjectTile({ achievment, index }) {
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);

  return (
    <Wrapper>
      <h3 style={{ width: '40%', textAlign: 'right' }}>{achievment?.year}</h3>
      <div style={{ width: 100, top: 28, position: 'relative' }}>
        <div
          style={{
            height: 10,
            width: 10,
            backgroundColor: 'white',
            borderRadius: 100,
            margin: '0 auto',
          }}
        />
        <div style={{ width: 2, height: '100%', backgroundColor: 'white', margin: '0 auto' }} />
      </div>
      <div
        style={{ width: '40%' }}
        onClick={() => {
          setDescriptionExpanded(!descriptionExpanded);
        }}
      >
        <h3>{achievment?.role}</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {achievment?.events?.map((event, index) => {
            return (
              <h4 key={index} style={{ marginRight: 4 }}>
                {event}
                {index !== achievment?.events?.length - 1 && ` | `}
              </h4>
            );
          })}
        </div>
        <div style={{ height: 16 }} />
        <p>{descriptionExpanded ? achievment?.description : achievment?.description?.substring(0, 255) + '...'}</p>
        <p>{descriptionExpanded ? 'Collapse' : 'View More'}</p>
        <div style={{ height: 32 }} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  color: #f5f5f5;
`;
