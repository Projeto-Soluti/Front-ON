import './Principal.css'
import React from 'react'
import img from '../Principal/imagem/bss.svg' // importando a imagem p/ ser chamada como variável lá embaixo - aí dá certo p/ fazer o deploy
import { Grid } from '@material-ui/core'
import { Box } from '@mui/material'

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

            <section className="footer">
                <footer>
                    <div className="itensFooter">
                        <div>
                            <div className="footer-left">
                                <h3 className="soluti" >SOLUTI <span className="on" > ON </span> </h3>

                                <div className="footer-links" >
                                    <a href="#">Home</a>
                                     | 
                                    <a href="#">Sobre Nós</a>
                                     | 
                                    <a href="#">Contato</a>
                                     | 
                                    <a href="#">Solutioners</a>
                                </div>

                                <p className="footer-company-name">Copyright © 2022 <strong>Soluti ON</strong> All rights reserved</p>
                            </div>
                        </div>
                        <div>
                            <div className="footer-center">
                                <div className="local">
                                    <i className="local"></i>
                                    <p>Brasil</p>
                                </div>

                                <div className="telefone">
                                    <i className="telefone"></i>
                                    <p>+55 11 1234-5678</p>
                                </div>
                                <div className="email">
                                    <i className="email"></i>
                                    <p><a href="mailto:onsoluti7@gmail.com">onsoluti7@gmail.com</a></p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="footer-right">
                                <p className="footer-company-about">
                                    <span>Sobre nós</span>
                                    A <strong >SOLUTION</strong> é uma rede estratégica e ágil para pequenos negócios, visando fortalecer o comércio nacional no rol do mercado financeiro até 2030.
                                </p>
                                <div className="footer-icons">
                                    <a href="https://www.github.com/projeto-soluti" target="_blank">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" />
                                    </a>

                                    <a href="#" target="_blank">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="facebook" />
                                    </a>

                                    <a href="#" target="_blank">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="linkedin" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </footer>
            </section>










        </div>
    )
}


export default Principal