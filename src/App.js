import React from 'react'
import Header from './component/Header';
import Section from './component/Section';
import NavBar from './component/NavBar';
import DailyCont from './linkpage/DailyCont';
import StudyCont from './linkpage/StudyCont';
import TravelCont from './linkpage/TravelCont';
import HobbyCont from './linkpage/HobbyCont';
import WriteForm from './linkpage/WriteForm';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Section />
      <NavBar />
      <Routes>
        <Route path="/DailyCont/*" element={<DailyCont />} />
        <Route path="/StudyCont/*" element={<StudyCont />} />
        <Route path="/TravelCont/*" element={<TravelCont />} />
        <Route path="/HobbyCont/*" element={<HobbyCont />} />
        <Route path="/WriteForm/*" element={<WriteForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App