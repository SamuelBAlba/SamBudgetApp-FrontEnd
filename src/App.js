import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";

import NavBar from "./Components/NavBar";

import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";

function App() {
  return (
    <div className="App">

   <Router>
    <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/transactions" element={<Index/>}/>
          <Route path="/transactions/:index" element={<Show/>}/>
          <Route path="/transactions/:index/edit" element={<Edit/>}/>
          <Route path="*" element={<FourOFour/>}/>



        </Routes>
      </main>



   </Router>

    </div>
  );
}

export default App;
