import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./Components/utils/global.context";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";


function App() {
  return (
      <ContextProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" component={Home}/>
            <Route path="/contacto" component={Contact}/>
            <Route path="/dentist/:id" component={Detail}/>
            <Route path="/favs" component={Favs}/>
          </Routes>
          <Footer/>
        </Router>
      </ContextProvider>
  );
}

export default App;
