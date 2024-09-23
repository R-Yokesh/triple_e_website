import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import RoutesData from './Routes/RoutesData';
import './App.css';

function App() {
  return (
    <div className="App trible-site-main">
      <Router basename='/trible'>
        <div className='navbar-main'>
          <Header />
        </div>
        <Routes>
          {RoutesData.map((data, i) => (
            <Route
              key={i}
              path={data.path}
              element={<data.element />}
            />

          ))}

        </Routes>
        <div className='footer-main'>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
