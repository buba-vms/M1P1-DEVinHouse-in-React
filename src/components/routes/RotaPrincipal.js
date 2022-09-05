import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../../pages/Home';
import PageNotFound from '../../pages/PageNotFound';
const RotaPrincipal = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="home" element={<Home />} />
        <Route path="/" element={<Navigate replace to="home" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RotaPrincipal;
