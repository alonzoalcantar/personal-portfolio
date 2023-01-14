import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { NavBar } from './Components/NavBar';
import { Banner } from './Components/Banner';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import { Resume } from './Components/Resume';



function App() {
  return (
    <div className="App">
      <NavBar  />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Resume />
      <Footer />

    </div>
  );
}

export default App;
