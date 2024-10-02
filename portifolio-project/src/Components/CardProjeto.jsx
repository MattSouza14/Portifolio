import '../Assets/Styles/projetos.css'

export default function CardProjeto() {
  return (
    <section id="projects">
      <h2>Projetos</h2>
      <div className="project-card">
        <img src="projeto1.jpg" alt="Projeto 1" />
        <h3>Título do Projeto </h3>
        <p>Descrição do projeto 1. Tecnologias usadas: HTML, CSS, JavaScript.</p>
        <a href="#">Ver Repositório</a>
        <a href="#">Ver Deploy</a>
      </div>
    </section>
  );
}


