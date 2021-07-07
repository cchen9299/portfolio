import React from 'react';
import styled from 'styled-components';
import TextPill from '../TextPill';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ProjectTile({ project }) {
  return (
    <Wrapper href={project.url} target="_blank">
      <h3>{project.name}</h3>
      <div style={{ height: 16 }} />
      <div style={{ display: 'flex' }}>
        {project.tags.map((tag) => {
          return <TextPill>{tag}</TextPill>;
        })}
      </div>
      <div style={{ height: 16 }} />
      {project.github && (
        <IconLink href={project.github} target="_blank">
          <FontAwesomeIcon icon={faGithub} size={'2x'} />
        </IconLink>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.a`
  width: 100%;
  background-color: black;
  height: 200px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  :last-child {
    margin-bottom: 0;
  }
`;

const IconLink = styled.a`
  color: #333;
  transition: 0.2s color;
  :hover {
    color: white;
  }
`;
