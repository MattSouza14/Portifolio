import React from "react"
import "./main.css"

class Main extends React.Component{
    render(){
        return(
            <main>
                <div className="about-me">
                    <div className="self-description">
                        <img src="" alt="Foto de perfil Mateus Souza" />
                        <span className="signature">Mateus Souza do Nascimento</span>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto soluta pariatur repudiandae consectetur, accusamus est inventore ut, saepe, vitae doloremque velit assumenda ea illum? Assumenda, in! Eligendi placeat id facilis?</p>

                    </div>
                    <div className="courses">
                        <div class="card mb-3 card-course">
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src="" alt="" class="img-fluid rounded-start" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                     </div>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
            </main>
        );
    }
}
export default Main