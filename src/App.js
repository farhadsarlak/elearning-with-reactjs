import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import MainContainer from "./containers/MainContainer";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
      <BrowserRouter>
          <ScrollToTop>
              <MainContainer/>
          </ScrollToTop>
          <ToastContainer/>
      </BrowserRouter>
  );
}

export default App;
