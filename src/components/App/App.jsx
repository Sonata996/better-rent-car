import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('pages/CatalogPage/CatalogPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="/catalog" element={<CatalogPage />} />

        <Route path="/favorites" element={''} />

        <Route path="*" element={<Navigate />} />
      </Route>
    </Routes>
  );
};
