import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../assets/Layout.css';
import Layout from '../components/Layout/Layout';
import Contents from '../pages/Contents/Contents';
import Details from '../pages/Details/Details';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Contents />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
