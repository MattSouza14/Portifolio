import React from "react";
import {Route, Routes} from 'react-router-dom'
import HomePage from '../Pages/HomePage'


export default function Rotas(){
    return(
    <Routes>
        <Route path="/" element={<HomePage/>} />
        {/* <Route path="*"/> */}
    </Routes>
    )
}