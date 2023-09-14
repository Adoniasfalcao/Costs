import { BrowserRouter as Router,Link } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Contacts from './components/pages/Contacts';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';


function App() {
  return (

      <Router>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/company">Empresa</Link>
          <Link to="/contacts">Contatos</Link>
          <Link to="/new-project">Novo projeto</Link>
        </ul>
        
        <Container customClass="min-height">
          <Routes>
            
              <Route exact path="/" element={<Home/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
              <Route exact path="/company" element={<Company/>}/>
              <Route path="/new-project" element={<NewProject/>}/>
          
          </Routes>
        </Container>
        <p>Footer</p>
      </Router>
  );
}

export default App;
