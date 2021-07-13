import React, { useState } from 'react';
import styled from 'styled-components';
import TextPill from '../TextPill';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGooglePlay, faAppStore } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated, config } from 'react-spring';
import ReactVisibilitySensor from 'react-visibility-sensor';

export default function ProjectTile({ project, index }) {
  const [startAnimation, setStartAnimation] = useState(false);

  const pillContainerAnimatedStyles = useSpring({
    to: { opacity: 1, transform: 'translateY(0px)' },
    from: { opacity: 0, transform: 'translateY(-50px)' },
    config: config.slow,
    pause: startAnimation,
    delay: 600,
  });

  const titleAnimatedStyles = useSpring({
    to: { opacity: 1, transform: 'translateY(0px)' },
    from: { opacity: 0, transform: 'translateY(50px)' },
    config: config.slow,
    pause: startAnimation,
    delay: 600,
  });

  const linesAnimatedStyles = useSpring({
    to: { width: '70%' },
    from: { width: '0%' },
    config: config.slow,
    pause: startAnimation,
  });

  const imageAnimatedStyles = useSpring({
    to: { width: '70%' },
    from: { width: '0%' },
    config: config.slow,
    pause: startAnimation,
  });

  console.log(project.image);

  return (
    <Wrapper href={project.url} target="_blank">
      <ContentContainer>
        <animated.p style={{ fontSize: 19, lineHeight: '27px', ...titleAnimatedStyles }}>
          {project.association} | {project.year}
        </animated.p>
        <H0 style={titleAnimatedStyles}>{project.name}</H0>
        <HrOne style={linesAnimatedStyles} />
        <HrTwo style={linesAnimatedStyles} />
        <animated.div style={{ display: 'flex', flexWrap: 'wrap', ...pillContainerAnimatedStyles }}>
          {project.tags.map((tag) => {
            return (
              <TextPill style={pillContainerAnimatedStyles} key={tag}>
                {tag}
              </TextPill>
            );
          })}
        </animated.div>
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
      <animated.div
        style={{
          height: '100%',
          position: 'absolute',
          overflow: 'hidden',
          right: 0,
          ...imageAnimatedStyles,
        }}
      >
        <Image backgroundImage={project.image} />
      </animated.div>
      <ReactVisibilitySensor onChange={() => setStartAnimation((current) => !current)}>
        <IndexNumber>0{index + 1}</IndexNumber>
      </ReactVisibilitySensor>
    </Wrapper>
  );
}

const HrOne = styled(animated.div)`
  height: 5px;
  width: 70%;
  background-color: white;
  margin: 16px 0 4px;
  border-radius: 15px;
`;

const HrTwo = styled(HrOne)`
  margin: 4px 0 16px;
  align-self: flex-end;
`;

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
  height: 100%;
  width: calc(1200px * 0.7);
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-color: #333;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  z-index: 10;
  max-width: 50%;
`;
const H0 = styled(animated.div)`
  font-size: 96px;
  line-height: 96px;
  font-weight: 700;
  text-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  // font-size: 48px;
  // line-height: 48px;
  // font-weight: 700;
  // text-transform: uppercase;
  // letter-spacing: 10px;

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
  position: absolute;
  right: -100px;
  bottom: 0;
`;

const IconLink = styled.a`
  color: white;
  transition: 0.2s color;
  margin-right: 16px;
  :hover {
    color: #999;
  }
`;
