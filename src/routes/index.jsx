import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../pages/main/HomePage.jsx";
import AboutPage from "../pages/main/AboutPage.jsx";
import StoreHomePage from "../pages/main/StoreHomePage.jsx";
// import CartPage from "../pages/main/CartPage.jsx";
import CardPage from "../pages/main/CardPage.jsx";
import SelectedPage from "../pages/main/SelectedPage.jsx";


const AppRoutes = () => {

    return (
        <BrowserRouter basename={'/'}>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/store" element={<StoreHomePage/>}/>
                <Route path="/card" element={<CardPage/>}/>
                <Route path="/select" element={<SelectedPage/>}/>

            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;

