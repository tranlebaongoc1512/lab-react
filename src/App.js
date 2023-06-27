import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './components/ThemeContext';
import Main from './components/Main';
import Header from './components/Header';
import Detail from './components/Detail';
import News from './components/News';
import About from './components/About';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';
import "./components/fontawesome/fontawesome.js"
import Footer from './components/Footer';
import AddFilm from './components/AddFilm';
import UpdateFilm from './components/UpdateFilm';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="container" style={{ background: theme.background, color: theme.color }}>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/news' element={<News />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/add-film' element={<AddFilm />} />
        <Route path='/update-film/:id' element={<UpdateFilm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
