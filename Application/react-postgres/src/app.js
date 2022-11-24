import React from 'react';
//import './css/App.css';
//import Nav from './components/Nav';
//import About from './pages/About';
//import Shop from './pages/Shop';
import Signup from './pages/Signup';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import ForgotPW from './pages/ForgotPW';
import Chat from "./pages/chat";
import MovieSearch from "./pages/movie-search";
import Navigation from './pages/Navigation';
import BG from './images/BG.jpg'

function App() {
    return <div>

        <div className="App">
            {/* <Nav/> */}
            <div style={{ backgroundImage: `url(${BG})` }}>

             </div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Signup" element={<Signup/>}/>
                    <Route path="/ForgotPW" element={<ForgotPW/>}/>
                    <Route path="/chat" element={<Chat/>}/>
                    <Route path="/movie-search" element={<MovieSearch/>}/>
                    <Route path="/Navigation" element={<Navigation/>}/>
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

//  import React, {useState, useEffect} from 'react';


// // function App() {
//   const [merchants, setMerchants] = useState(false);
//   useEffect(() => {
//     getMerchant();
//   }, []);
//   function getMerchant() {
//     fetch('movieshop.postgres.database.azure.com')
//       .then(response => {
//         return response.text();
//       })
//       .then(data => {
//         setMerchants(data);
//       });
//   }
// //   function createMerchant() {
// //     let name = prompt('Enter merchant name');
// //     let email = prompt('Enter merchant email');
// //     fetch('http://localhost:3001/merchants', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify({name, email}),
// //     })
// //       .then(response => {
// //         return response.text();
// //       })
// //       .then(data => {
// //         alert(data);
// //         getMerchant();
// //       });
// //   }
// //   function deleteMerchant() {
// //     let id = prompt('Enter merchant id');
// //     fetch(`http://localhost:3001/merchants/${id}`, {
// //       method: 'DELETE',
// //     })
// //       .then(response => {
// //         return response.text();
// //       })
// //       .then(data => {
// //         alert(data);
// //         getMerchant();
// //       });
// //   }
//   return (
//     <div>
//       {merchants ? merchants : 'There is no merchant data available'}
//       <br />
//       {/* <button onClick={createMerchant}>Add merchant</button> */}
//       <br />
//       {/* <button onClick={deleteMerchant}>Delete merchant</button> */}
//     </div>
//   );
//  }
// export default App;