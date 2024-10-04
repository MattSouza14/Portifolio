import React from "react";
import '../Assets/Styles/tecnologias.css';

const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "Python", "Java", "Linux", "Bootstrap"];
export default function Tecnologias() {
  return (
    <section id="technologies">
    <h2>Tecnologias</h2>
    <div className="technology-list">
      {tecnologias.map((tech, index) => (
        <span key={index} className="technology-item">{tech}</span>
      ))}
    </div>
  </section>
  );
}
// Futuramente, trocar o nome por icone e ao passar o mouse por cima do icone, aparace o nome da tech

