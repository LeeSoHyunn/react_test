import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import App2 from './App2';
import App3 from './App3';
import Home from "./component/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<App2 />} />
        <Route path="/count" element={<App3 />} />
      </Routes>
      <div className='menu'>
        <Link to={"/"}> Home </Link>
        <Link to={"/list"}> Todo List </Link>
        <Link to={"/count"}> Simple Counter </Link>
      </div>
    </div>
  );
}

export default App;
