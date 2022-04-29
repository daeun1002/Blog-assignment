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
  const user = false;
  return (
    <BrowserRouter>
      <Header />
      <Section />
      <NavBar />
      <Routes>
        <Route path="/DailyCont/*" element={<DailyCont />} />
        <Route path="/StudyCont/*" element={user ? <DailyCont /> : <StudyCont />} />
        <Route path="/TravelCont/*" element={user ? <DailyCont /> : <TravelCont />} />
        <Route path="/HobbyCont/*" element={user ? <DailyCont /> : <HobbyCont />} />
        <Route path="/WriteForm/*" element={user ? <DailyCont /> : <WriteForm />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App