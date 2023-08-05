import React from "react";
import Home from './containers/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const MyRoutes = () =>{
    return(
<Router>
    <Routes>
        <Route path="/" element={<Home/>}/>
    </Routes>
</Router>
    )
}

export default MyRoutes