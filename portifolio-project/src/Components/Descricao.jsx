import '../Assets/Styles/descricao.css'
// import minhaFoto from "lembrar de escolher uma foto";


export default  function Descricao() {
  return (
    <section id="about">
      <h2>Sobre Mim</h2>
      <div className="about-content">
        <img src="{minhaFoto}" alt="Mateus Souza" className="profile-pic" />
        <p>
          Olá, sou Mateus Souza, desenvolvedor backend com interesse em cibersegurança. 
          Atualmente, estou estudando diversas tecnologias para aprimorar minhas habilidades 
          no desenvolvimento de software.
        </p>
      </div>
    </section>
  );
}


