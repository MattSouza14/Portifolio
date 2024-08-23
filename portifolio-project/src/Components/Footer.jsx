import '../Assets/Styles/footer.css'

export default function Footer(){
    return(

        <footer>    
            <div className="footerContainer">
                <div className="branding">
                    <div className="imageBranding">
                        <img src="" alt="branding"  className="imgBrand"/>
                    </div>
                </div>
                <div className="contatos">
                    <ul >
                        {/* Lembrar!!! bota os icons */}
                        <li><a href=""><i class="fa-brands fa-linkedin"></i>Linkedin</a></li>
                        <li><a href=""><i class="fa-brands fa-github"></i>Github</a></li>
                        <li><a href=""><i class="fa-brands fa-instagram"></i>Instagram</a></li>
                    </ul>
                </div>
                <div className="formularioContato">
                    <form action="">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder="seuemail@exemplo.com" />
                        <label htmlFor="mensagem">Mensagem:</label>
                        <textarea name="mensagem" id="mensagem"></textarea>
                    </form>
                </div>
            </div>
            <div className="footerLine"></div>
            <p className='criador'><span>Criado por:</span> Mateus Souza</p>
        </footer>
    )
}