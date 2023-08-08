import React from "react";
import Home from './containers/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Orders from "./containers/Orders";

const MyRoutes = () =>{
    return(
<Router>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pedidos" element={<Orders/>}/>
    </Routes>
</Router>
    )
}

export default MyRoutes