import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/global.scss";

import Home from "./pages/Home";
import Product from "./pages/Product";

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
                        element={<Product />}
                    />
                </Routes>
            </main>
        </>
    );
};
export default App;
