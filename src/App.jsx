import "./styles/main.css";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";

function App() {

  return (
    <>
    <Router>
      <Navbar/>


       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/project/:id" element={<Project/>} />
        <Route path="/contacts" element={<Contacts/>} />
          
       </Routes>
       <Footer/>

       
    </Router>


    </>
  )
}

export default App
