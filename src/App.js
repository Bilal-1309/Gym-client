import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage';

const App = () => {
  return (
    <Provider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/signin' />
        <Route path='/signup'/>
      </Routes>
    </BrowserRouter>
  </Provider>
  );
};

export default App;
