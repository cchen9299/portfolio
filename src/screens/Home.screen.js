import React from 'react';
import ProjectTile from '../components/ProjectTile';
import timelineData from '../timelineData';
import TimelineRow from '../components/TimelineRow';
import projectData from '../projectData';
import styled, { keyframes } from 'styled-components';
import Particles from 'react-particles-js';
import landingBubbleParam from './landingBubblesParam';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function HomeScreen() {
  const move = () => keyframes`
    from{
      transform: translate(0px, 0px);
    }
    33%{
      transform: translate(100px, 100px);
    }
    66%{
      transform: translate(100px, -100px);
    }
    to{
      transform: translate(0, 0);
    }
  `;

  return (
    <div style={{ scrollBehavior: 'smooth' }}>
      <div
        style={{
          zIndex: 100,
          position: 'fixed',
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          height: 60,
        }}
      >
        <StyledAnchorLink href="#lab" children={'Lab'} />
        <StyledAnchorLink href="#work" children={'Work'} />
        <StyledAnchorLink href="#experience" children={'Experience'} />
      </div>
      <div
        style={{
          height: '100vh',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#111',
          alignItems: 'center',
        }}
      >
        {/* <Particles
            style={{ position: 'absolute', top: 0, left: 0 }}
            width={'100vw'}
            height={'100vh'}
            params={landingBubbleParam}
          /> */}
        <h1>Hi, I'm Hank.</h1>
        <h2 style={{ textAlign: 'center' }}>
          <span style={{ color: 'red' }}>Active</span> Product Designer.
          <br />
          <span style={{ color: 'red' }}>Trifling</span> UX Researcher.
          <br />
          <span style={{ color: 'red' }}>Aspiring</span> Front End Developer.
        </h2>
        <p>psst... this site is not completed yet</p>
      </div>
      <SectionContainer id="lab">
        <h1 style={{ textAlign: 'center' }}>Lab</h1>
        <div style={{ height: 40 }} />
        {projectData.lab.map((labProject, index) => {
          return <ProjectTile project={labProject} key={labProject.name} index={index} />;
        })}
      </SectionContainer>
      <SectionContainer id="work">
        <h1 style={{ textAlign: 'center' }}>Work</h1>
        <div style={{ height: 40 }} />
        {projectData.work.map((workProject, index) => {
          return <ProjectTile project={workProject} key={workProject.name} index={index} />;
        })}
      </SectionContainer>
      <SectionContainer id="experience">
        <h1 style={{ textAlign: 'center' }}>Experience</h1>
        <div style={{ height: 40 }} />
        {timelineData.map((timelineEvent, index) => {
          return <TimelineRow achievment={timelineEvent} key={index} index={index} />;
        })}
      </SectionContainer>
    </div>
  );
}

export default HomeScreen;

const Bubble = styled.div`
  width: 100px;
  height: 100px;
  background-color: pink;
  animation: ${(props) => props.move} 3s infinite;
`;

const StyledAnchorLink = styled(AnchorLink)`
  color: white;
  font-size: 19px;
  font-weight: bold;
  padding: 8px 16px;
  margin: 0 8px;
  transition: opacity 0.2s;
  :hover {
    opacity: 0.5;
  }
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 100px;
`;
