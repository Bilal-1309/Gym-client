import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage';
import SignIn from './components/Sign/SignIn/SignIn';
import SignUp from './components/Sign/SignUp/SignUp';
import { store } from './redux/configureStore';
import Trainers from './components/trainers/Trainers'

const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='trainers' element={<Trainers /> } />
        <Route path='/' element={<HomePage />}/>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
  </Provider>
  );
};

export default App;
