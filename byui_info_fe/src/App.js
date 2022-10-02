import './Styles/App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import {Navbar, Home, Contact} from "./Pages";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </Router>   
  );
}

export default App;
