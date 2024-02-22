//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Homepage';
import Footer from './component/Footer';
import Menu from './component/Menu';
import { Route, Routes } from 'react-router-dom';
import Career from './pages/Career';
import Investment from './pages/Investment';
import Contact from './pages/Contact';
import RealEstate from './pages/RealEstate';
import About from './pages/About';
import TermsAndCondition from './pages/TermsAndCondition';
//import Mxbinvestment from './component/Mxbinvestment';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='about' element={<About/>}/>
        <Route path='career' element={<Career />}/>
        <Route path='investment' element={<Investment />}/>
        <Route path='realEstate' element={<RealEstate/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='TermsAndCondition' element={<TermsAndCondition/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
