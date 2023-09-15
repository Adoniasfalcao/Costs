import { BrowserRouter as Router } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Contacts from './components/pages/Contacts';
import Company from './components/pages/Company';
import Projects from './components/pages/Projects';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer';


function App() {
  return (

      <Router>
        <Navbar/>
        
        <Container customClass="min-height">
          <Routes>
            
              <Route exact path="/" element={<Home/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
              <Route path="/company" element={<Company/>}/>          
          </Routes>
        </Container>
        
        <Footer/>
      </Router>
  );
}

export default App;
