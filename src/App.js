import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import DifferentSubjects from './Components/DifferentSubjects';
import Services from './Components/Services';
import Sections from './Components/Sections';
import SliderSide from './Components/SliderSide';
import DropMsg from './Components/DropMsg';
import Footer from "./Components/Footer"
import Doubt from './Components/Doubt';
import Topics from './Components/Topics';

function App() {
  return (
    <>
    <Home/>
    <Topics/>
    <Services/>
    <Sections/>
    <Doubt/>
    <DropMsg/>
    <Footer/>
    </>
  );
}

export default App;
