import logo from './logo.svg';
import './App.css';
import NavBar from './Header'
import Avtar from './card'
import { Routes, Route } from "react-router-dom";
import About from './about'
import Project from './project'
import Resume from './resume'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
         <Route path="/" element={<Avtar />} />
         
         <Route path="/about" element={<About />} />
         <Route path="/projects" element={<Project />} />
         <Route path="/resume" element={<Resume />} />
      </Routes>
      {/* <Avtar /> */}
















    </div>
  );
}

export default App;
