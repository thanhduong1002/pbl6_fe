import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import SubmitOTP from './pages/SubmitOTP/SubmitOTP';
import Home from './pages/Home/Home';
import Settings from './pages/Settings/Settings';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import AuthPage from './pages/Auth/AuthPage';
import Insert from './pages/InsertPage/Insert';
import Update from './pages/UpdatePage/Update';
import HomePage from './pages/HomePage/HomePage';
import Cart from './pages/CartPage/Cart';
import Detail from './pages/Detail/Detail';

function App() {
  return (
    // <ChakraProvider theme={theme}>
    //   <SignIn />
    // </ChakraProvider>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/reset" element={<ResetPassword />} />
      <Route path="/submitOTP" element={<SubmitOTP />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/insert" element={<Insert />} />
      <Route path="/update" element={<Update />} />
      <Route path="/oauth-callback" element={<AuthPage />}/>
      <Route path="/test" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/detail" element={<Detail />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
