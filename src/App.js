import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";

import NavBar from "./Components/NavBar";

import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">

   <Router>
    <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>


        </Routes>
      </main>



   </Router>

    </div>
  );
}

export default App;
