import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import User from './components/User';
function App() {
  return (
    <Router>
      
      <Header />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} /> 
        <Route path='/user' element={<User />} /> 
        <Route path='/user/:id' element={<User />} /> 
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;
