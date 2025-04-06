import ButtonGradient from './assets/svg/ButtonGradient';
import Benefits from './components/Benefits';
import Button from './components/Button';
import Collaboration from './components/Collaborationn';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Roadmap from './components/RoadMap';
import Services from './components/Services';
const App = () => {
  return (
    <>
      <ButtonGradient />
      <Header />
      <Hero />
      <Benefits />
      <Collaboration />
      <Services />
      <Pricing />
      <Roadmap />
      <Footer />
    </>
  );
};
export default App;
