import React from 'react';
import './App.css';
import LandingPage from './LandingPage';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
// import Postview from './Postview';
import Postview from './Postview';
function App() {
  return (
    <div className="wrapper">
      {/* <LandingPage />  */}
      <BrowserRouter>
        <Routes>
            <Route  exact path='*' element={<LandingPage/>}/>
            <Route  exact path='./Postview.js'element={<Postview/>}/>
            {/* <Postview/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;