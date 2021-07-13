import HomeScreen from './screens/Home.screen';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <HomeScreen />
    </ParallaxProvider>
  );
}

export default App;
