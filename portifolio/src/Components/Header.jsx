import '../Assets/Styles/header.css'
export default function Header(){
    return(

        <header>
            <div className="container">
                <div className="imageLogo">
                    <img src="" alt="Logo do portifolio" />
            </div>
                <div className="navLinks">
                    <nav>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/mateus-souzaa/" target='_Blank'>Linkedin</a></li>
                            <li><a href="https://github.com/MattSouza14" target='_Blank'>Github</a></li>
                            {/* Criar uma rota usando o react routes para uma pagina mais detalhada falando sobre mim */}
                            <li><a href="" target='_Blank'>Sobre Mim</a></li>
                            <li><a href="" target='_Blank'>Projetos</a></li>
                            {/* A parte dos certificados vai ser  um link direcionado para uma pagina no google
                            drive com todos os certificados em uma pasta */}
                            <li><a href="" target='_Blank'>Certificados</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}