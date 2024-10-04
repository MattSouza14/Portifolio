import '../Assets/Styles/projetos.css';

const projetos = [
  {
    title: "teste",
    description: "projetoteste",
    techs: ["HTML", "CSS", "JavaScript, React"],
    image: "projeto1.jpg",  
    repoLink: " ",
    deployLink: " "
  }
  
];

export default function CardProjeto() {
  return (
    <section id="projects">
      <h2>Projetos</h2>
      {projetos.map((projetoItem, index) => (
        <div className="project-card" key={index}>
          <img src={projetoItem.image} alt={projetoItem.title} />
          <h3>{projetoItem.title}</h3>
          <p>{projetoItem.description}</p>
          <div className="techsUse">Tecnologias usadas: 
            {projetoItem.techs.map((tech, idx) => (
              <span key={idx} className="tech">{tech}</span>
            ))}
          </div>
          <a href={projetoItem.repoLink} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={projetoItem.deployLink} target="_blank" rel="noopener noreferrer">Deploy</a>
        </div>
      ))}
    </section>
  );
}


