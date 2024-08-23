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
                        <ul className='navLinks'>
                            <li><a href="https://www.linkedin.com/in/mateus-souzaa/" target='_Blank'><i class="fa-brands fa-linkedin"></i> Linkedin</a></li>
                            <li><a href="https://github.com/MattSouza14" target='_Blank'><i class="fa-brands fa-github"></i> Github</a></li>
                            {/* Criar uma rota usando o react routes para uma pagina mais detalhada falando sobre mim */}
                            <li><a href="" target='_Blank'><i class="fa-solid fa-person"></i> Sobre Mim</a></li>
                            {/* Ao ser clicado, desce a pagina ou abre uma pagina completa com os projetos feitos e em andamento  */}
                            <li><a href="" target='_Blank'><i class="fa-solid fa-gears"></i> Projetos</a></li>
                            {/* A parte dos certificados vai ser  um link direcionado para uma pagina no google
                            drive com todos os certificados em uma pasta */}
                            <li><a href="https://drive.google.com/drive/folders/1YQI9RtesMnxkKEtvf5-iHqV4wEVFXpdg?usp=sharing" target='_Blank'><i class="fa-solid fa-medal"></i> Certificados</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
