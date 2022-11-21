import Navbar from './components/Navbar'
import './App.css';
import { BrowserRouter as Router,Route, Routes  } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';

function App() {
  return (
    
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/services' exact element={<Services/>}/>
      <Route path='/products' exact element={<Products/>}/>
      <Route path='/contact-us' exact element={<ContactUs/>}/>
      <Route path='/sign-up' exact element={<SignUp/>}/>
      <Route path='/marketing' exact element={<Marketing/>}/>
      <Route path='/consulting' exact element={<Consulting/>}/>
    </Routes>
    </Router>
    
  );
}

export default App;
