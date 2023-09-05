import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './components/navbar1/Navbar1';
import Navbar2 from './components/navbar2/Navbar2';
import Card1 from './components/Card1/Card1';
import Footer1 from './components/footer1/Footer1';
import Footer2 from './components/Footer2/Footer2';
import CardsRow from './components/main/CardsRow';
import CardsData from './components/main/CardsData';
import UpperFooter from './components/upperfooter/UpperFooter';


function App() {
  return (
    <>
    
   <Navbar1/>
   <Card1/>
   <div className="container mt-3">
      <CardsRow cards={CardsData} />
    </div>
    <UpperFooter/>
   <hr/>
   <Footer1/>
   <Footer2/>

   </>
  );
}

export default App;
