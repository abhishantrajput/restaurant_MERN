import "./App.css";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Success from "./pages/Success";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";





const App = () =>{

  return (

    <div>
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  </div>
  )
}


export default App;