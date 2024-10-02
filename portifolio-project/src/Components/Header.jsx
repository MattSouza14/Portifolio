import '../Assets/Styles/header.css'


export default function Header() {
  return (
    <header>
      <div className="logo">
        <h1>Minha Logo</h1>
      </div>
      <nav>
        <ul>
          <li><a href="https://www.linkedin.com/in/mateus-souzaa/" target='_blank'>LinkedIn</a></li>
          <li><a href="https://github.com/MattSouza14" target='_blank'>GitHub</a></li>
          <li><a href="#" target='_blank'>Sobre Mim</a></li>
          <li><a href="#">Projetos</a></li>
          <li><a href="#" target='_blank'>Certificados</a></li>
        </ul>
      </nav>
    </header>
  );
}


