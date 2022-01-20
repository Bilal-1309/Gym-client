import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage';
import SignIn from './components/Sign/SignIn/SignIn';
import SignUp from './components/Sign/SignUp/SignUp';
import { store } from './redux/configureStore';
import Trainer from './components/Trainer/index'
import Profile from './components/Profile';
import Admin from './components/Admin';

const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/trainers' element={<Trainer /> } />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/user/:id' element={<Profile/>}/>
        <Route path='/admin/:id' element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  </Provider>
  );
};

export default App;
