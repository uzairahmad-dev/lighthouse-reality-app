import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import Sell from './pages/Sell/Sell';
import Buy from './pages/Buy/Buy';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="sell" element={<Sell />} />
                    <Route path="buy" element={<Buy />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
