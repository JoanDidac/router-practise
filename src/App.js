import { Routes ,Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Contact from './views/Contact';
import Projects from './views/Projects';
import ErrorPage from './views/ErrorPage';
import { NavLink } from 'react-router-dom';
import Navbar from './components/NavBar';
import ProjectsApps from './components/ProjectsApps';
import ProjectsGames from './components/ProjectsGames';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}/> 
      <Route path='projects' element={<Projects />} >  
      <Route path='games' element={<ProjectsGames />} />
      <Route path='apps' element={<ProjectsApps />} />
      </Route> 
      <Route path='contact' element={<Contact />} />
      <Route path='*' element={<ErrorPage />} />   
      <Route path='projects' element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;