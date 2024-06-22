import React from "react"
import "./navBar.css"

class Navbar extends React.Component{
    render(){
        return(
            <header>
                <nav id="nav">
                    
                    <a href="#">Projetos</a>
                    <a href="#">Sobre Mim</a>
                    <a href="#">Habilidades</a>
                    <a href="https://github.com/MattSouza14" target="blank"><i class="fa-brands fa-github mx-2"></i>Github</a>
                    <a href="#"><i class="fa-brands fa-linkedin mx-2"></i>Linkedin</a>

                </nav>
            </header>

        );
    }
}
export default Navbar