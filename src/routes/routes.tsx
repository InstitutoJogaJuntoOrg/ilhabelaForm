import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/home/form';
import { FormPage } from '../pages/form/form';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/inscrição" element={<FormPage />} />
    </Routes>
  );
}