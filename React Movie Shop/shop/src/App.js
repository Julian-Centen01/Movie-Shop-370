import React from 'react';
import './css/App.css';
 //import Nav from './components/Nav';
 //import About from './pages/About';
 //import Shop from './pages/Shop';
 import Signup from './pages/Signup';
 import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import ForgotPW from './pages/ForgotPW';
function App() {
  return <div>
    <div className="App">
    {/* <Nav/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/ForgotPW" element={<ForgotPW />} />
          {/* <Route path="/shop" element={<Shop />} /> */}
        </Routes>
      </Router>
   </div>
  </div>;
}

    // I have tried doing Router then Routes and inside specifing each route etc, nothing seems to work
    // even if you uncomment the two routers below nothing should happen as it is not yet implemented, but as soon as you do, sc
    // screen goes blank. I am convinced that this is unique to my machine as this is the third react application
    // Ive made using different techniques and versions and still no luck
     //<Router>
    //  <div className='App'>
    //   <Nav/>
    //   <About/>
    //   <Shop/>
    //  </div>
  //   <div className="App">
  //     <Nav/>
  //     <Router>
  //       <Routes>
  //         <Route path="/" element={<Home/>} />
  //         <Route path="/about" element={<About />} />
  //         <Route path="/shop" element={<Shop />} />
  //       </Routes>
  //     </Router>
  //   </div>
  //    //</Router>
  // );
// }

 export default App;