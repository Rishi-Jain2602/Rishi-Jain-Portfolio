import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Screens/Home';
import Contact from './Screens/Contact';
import Projects from './Screens/Projects';
import Experience from './Screens/Experience'
import Education from './Screens/Education';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route element = {<Home/>} path='/' />
          <Route element = {<Contact/>} path='/contact'/>
          <Route element = {<Projects/>} path='/projects'/>
          <Route element = {<Experience/>} path='/work'/>
          <Route element = {<Education/>} path='/education'/>
        </Routes>

      </Router>

    </>
  );
}

export default App;
