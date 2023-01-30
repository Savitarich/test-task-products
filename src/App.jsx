import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/global.scss";

import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

const App = () => {
    return (
        <>
            <main>
                <Routes>
                    <Route
                        path='/'
                        element={<Home />}
                    />
                    <Route
                        path='/product/:id'
                        element={<ProductPage />}
                    />
                </Routes>
            </main>
        </>
    );
};
export default App;
