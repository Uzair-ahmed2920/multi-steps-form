
import React from "react";
import { Route, Routes } from "react-router-dom";
import MultistepForm from "./components/MultistepForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MultistepForm/>} />
      </Routes>
    <MultistepForm/>
    </>
  );
}

export default App;
