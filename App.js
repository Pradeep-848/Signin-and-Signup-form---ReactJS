
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Card from './page/Card';
import Shop from './page/Shop';
import Home from './page/Home';
import Navbar from './com/Navbar';
import Footer from './com/Footer';
import Check from './page/Check';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
  
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Shop' element={<Shop />}/>
      <Route path='/Card' element={<Card />}/>
      <Route path='/Check' element={<Check />}/>
    
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
