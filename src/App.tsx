import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import Sell from './pages/Sell/Sell';
import Buy from './pages/Buy/Buy';
import Realtors from './pages/Realtors/Realtors';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="sell" element={<Sell />} />
                    <Route path="buy" element={<Buy />} />
                    <Route path="realtors" element={<Realtors />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<SignUp />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
