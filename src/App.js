
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MultistepForm from "./components/MultistepForm";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" component={MultistepForm} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
