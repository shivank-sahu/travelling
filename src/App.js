import "./App.css";

import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import IInfo from "./Component/IInfo/IInfo";
import Navbar from "./Component/Navbar/Navbar";
import Search from "./Component/Search/Search";
import Subsriber from "./Component/Subscriber/Subsriber";
import Support from "./Component/Support/Support";
import Travelers from "./Component/Travelers/Travelers";
import Language from "./Component/language/Language";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";





function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/support" element={<Support />} />
          <Route path="/IInfo" element={<IInfo />} />
          <Route path="/Travelers " element={<Travelers />} />
          <Route path="/Language " element={<Language />} />
          <Route path="/manage-care/*" element={<Subsriber />} />
          <Route path="/add-care/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Navbar />
      <Home />
      <Search />
      <Support />
      <IInfo />
      <Language />
      <Travelers />
      <Subsriber />
      <Footer />
    </>
  );
}

export default App;
