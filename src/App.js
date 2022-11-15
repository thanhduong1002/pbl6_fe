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

function App() {
  return (
    // <ChakraProvider theme={theme}>
    //   <SignIn />
    // </ChakraProvider>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/reset" element={<ResetPassword />} />
      <Route path="/submitOTP" element={<SubmitOTP />} />
      <Route path="/settings" element={<Settings />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
