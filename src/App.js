import './App.css';
import Navbar from './Navbar';
import { Route, Routes } from "react-router-dom";
import Cards from './pages/Cards';
import Query from './pages/Query';

import Home from './pages/Home';



function App() {

  return (
    <>
    <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cards' element={<Cards/>} />
          <Route path='/query' element={<Query/>} />
        </Routes>
    </div>
    </>
  );
}

export default App;
