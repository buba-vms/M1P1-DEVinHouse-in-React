import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from '../../App';
import PageNotFound from '../../pages/PageNotFound';
const RotaPrincipal = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RotaPrincipal;
