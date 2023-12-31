import { BrowserRouter as Router } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Contacts from './components/pages/Contacts';
import Company from './components/pages/Company';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';
import NewProject from './components/pages/NewProject';
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
              <Route path="/new-project" element={<NewProject/>}/>
              <Route path="/project/:id" element={<Project/>} />        
          </Routes>
        </Container>
        
        <Footer/>
      </Router>
  );
}

export default App;
