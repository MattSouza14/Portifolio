

export default function CardProjeto(imagem, titulo, linguagens, repositorio, deploy, descricao){
    return(
        <>
            <div className="cardContainer">
                <div className="imageContainer">
                    <img src="" alt="Foto do projeto" />
                </div>
                        <h1>Rookie Coder Network</h1>
                <div className="sobreProjeto">
                    <div className="informacoesProjeto">
                        <div className="descricaoProjeto"></div>
                        <div className="tecnologiasUsadas"></div>
                    </div>
                    <div className="linksProjeto">
                        <button className="repositorioProjeto"><a href=""></a></button>
                        <button className="deployDoProjeto"><a href=""></a></button>
                    </div>
                </div>

            </div>
        </>
    )
}