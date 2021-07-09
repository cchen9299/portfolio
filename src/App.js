import ProjectTile from './components/ProjectTile';
import timelineData from './timelineData';
import TimelineRow from './components/TimelineRow';
import projectData from './projectData';

function App() {
  return (
    <div>
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
      <div style={styles.sectionContainer}>
        <h1 style={{ textAlign: 'center' }}>Lab</h1>
        <div style={{ height: 40 }} />
        {projectData.lab.map((labProject, index) => {
          return <ProjectTile project={labProject} key={labProject.name} index={index} />;
        })}
      </div>
      <div style={styles.sectionContainer}>
        <h1 style={{ textAlign: 'center' }}>Work</h1>
        <div style={{ height: 40 }} />
        {projectData.work.map((workProject, index) => {
          return <ProjectTile project={workProject} key={workProject.name} index={index} />;
        })}
      </div>
      <div style={styles.sectionContainer}>
        <h1 style={{ textAlign: 'center' }}>Experience</h1>
        <div style={{ height: 40 }} />
        {timelineData.map((timelineEvent, index) => {
          return <TimelineRow achievment={timelineEvent} key={index} index={index} />;
        })}
      </div>
    </div>
  );
}

export default App;

const styles = {
  sectionContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 1200,
    margin: '0 auto',
    paddingTop: 100,
    paddingBottom: 100,
  },
};
