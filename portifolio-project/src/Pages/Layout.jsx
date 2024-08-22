import Header from "../Components/Header"
import Rotas from "../Routes/Rotas"
import { BrowserRouter } from "react-router-dom"

export default function Layout(){
    return(
        <>
            <BrowserRouter>
                <Header/>
                    <Rotas/>            
            </BrowserRouter>
        </>
    )
}