import React from 'react';
import styled from 'styled-components';

export default function TextPill({ children }) {
  return (
    <Wrapper>
      <InsetText>{children}</InsetText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 6px 12px;
  background-color: rgba(0, 0, 0, 0.3);
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 5px;
`;

const InsetText = styled.p`
  color: white;
  font-size: 14px;
  line-height: 14px;
  font-family: 'Roboto Mono';
`;
