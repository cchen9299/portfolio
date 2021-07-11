import React from 'react';
import styled from 'styled-components';
import TextPill from '../TextPill';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGooglePlay, faAppStore } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { Parallax } from 'react-scroll-parallax';

export default function ProjectTile({ project, index }) {
  return (
    <Wrapper href={project.url} target="_blank">
      <Parallax y={['-50px', '50px']} styleOuter={{ width: '100%', zIndex: 10 }}>
        <ContentContainer>
          <p style={{ fontSize: 19, lineHeight: '27px' }}>
            {project.association} | {project.year}
          </p>
          <H0>{project.name}</H0>
          <div style={styles.topHorizontalLine} />
          <div style={styles.bottomHorizontalLine} />
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {project.tags.map((tag) => {
              return <TextPill key={tag}>{tag}</TextPill>;
            })}
          </div>
          <div style={{ height: 16 }} />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {project.github && (
              <IconLink href={project.github} target="_blank">
                <FontAwesomeIcon icon={faGithub} size={'2x'} />
              </IconLink>
            )}
            {project.appstore && (
              <IconLink href={project.appstore} target="_blank">
                <FontAwesomeIcon icon={faAppStore} size={'2x'} />
              </IconLink>
            )}
            {project.playstore && (
              <IconLink href={project.playstore} target="_blank">
                <FontAwesomeIcon icon={faGooglePlay} size={'lg'} />
              </IconLink>
            )}
            {project.url && (
              <IconLink href={project.url} target="_blank">
                <FontAwesomeIcon icon={faLink} size={'lg'} />
              </IconLink>
            )}
          </div>
        </ContentContainer>
      </Parallax>
      <Image backgroundImage={project.image} />
      <Parallax y={['500px', '-100px']} x={['100px', '100px']}>
        <IndexNumber>0{index + 1}</IndexNumber>
      </Parallax>
    </Wrapper>
  );
}

const styles = {
  topHorizontalLine: {
    height: 5,
    width: '70%',
    backgroundColor: 'white',
    margin: '16px 0 4px',
    borderRadius: 15,
  },
  bottomHorizontalLine: {
    height: 5,
    width: '60%',
    backgroundColor: 'white',
    margin: '4px 0 16px',
    borderRadius: 15,
    alignSelf: 'flex-end',
  },
};

const Wrapper = styled.div`
  height: 70vh;
  width: 100%;
  color: white;
  display: flex;
  margin-bottom: 30vh;
  position: relative;
  align-items: center;
  :last-child {
    margin-bottom: 0;
  }
`;

const Image = styled.div`
  width: 70%;
  height: 100%;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-color: pink;
  position: absolute;
  right: 0;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  z-index: 10;
  max-width: 50%;
`;
const H0 = styled.h1`
  font-size: 96px;
  line-height: 96px;
  font-weight: 700;
  // font-size: 48px;
  // line-height: 48px;
  // font-weight: 700;
  // text-transform: uppercase;
  // letter-spacing: 10px;
  text-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);

  // color: transparent;
  // background-color: #fff;
  // text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  // -webkit-background-clip: text;
  // -moz-background-clip: text;
  // background-clip: text;
`;
const IndexNumber = styled.h1`
  font-size: 256px;
  line-height: 256px;
  font-family: 'Slabo 27px';
  color: red;
  opacity: 0.3;
`;

const IconLink = styled.a`
  color: white;
  transition: 0.2s color;
  margin-right: 16px;
  :hover {
    color: #999;
  }
`;
