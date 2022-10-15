import './Principal.css'
import React from 'react'
//import img from '../Principal/imagem/bss.svg' // importando a imagem p/ ser chamada como variável lá embaixo - aí dá certo p/ fazer o deploy



function Principal() {
    return (
        <div className="App">
        {/* cabeçalho*/}

            <header className="header-menu">
                <div className='title'>
                    <h1>SolutiON</h1>
                </div>

                <nav>
                    <ul className="lista-menu">
                        <li>
                            <a href="#sobre">Sobre</a>
                        </li>
                        <li>
                            <a href="#iniciativas">Iniciativas</a>
                        </li>
                        <li>
                            <a href="#servicos">Serviços</a>
                        </li>
                        <li>
                            <a href="#alcance">Alcance</a>
                        </li>
                        <li>
                            <a href="#contato">Contato</a>
                        </li>
                        <li>
                            <a href="#login" className='login'>Login</a>
                        </li>

                    </ul>
                </nav>
            </header>

            {/* página principal  */}
            <main>

                {/* metade da tela p/ o texto */}
                <aside>
                    <h2>Soluti<span>ON</span></h2>
                    <h3>Soluções empresariais</h3>
                    <p>conectando alguma coisa e blablablaaaaaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>


                    <input type="submit" value="Cadastre a sua empresa" className="enviar" />
                </aside>

                <article>
                    <img src={img} alt="COLOCAR ALGUMA DESCRIÇÃO MINIMAMENTE COERENTE" />
                </article>
                
                <section>
                    <article id="sobre">

                    </article>
                </section>
                        

                <section>
                    <article id="iniciativas">

                    </article>
                </section>


                <section>
                    <article id="servicos">

                    </article>
                </section>


                <section>
                    <article id="alcance">

                    </article>
                </section>


                <section>
                    <article id="contato">

                    </article>
                </section>


                <section>
                    <article id="login">

                    </article>
                </section>

            </main>



    
            
                
    
    
        </div>
    )
}


export default Principal