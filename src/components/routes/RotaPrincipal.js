import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../../pages/Home';

export const RotaPrincipal = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  </BrowserRouter>;
};
