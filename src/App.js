import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './components/ThemeContext';
import Main from './components/Main';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import "./components/fontawesome/fontawesome.js"

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="container" style={{ background: theme.background, color: theme.color }}>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
