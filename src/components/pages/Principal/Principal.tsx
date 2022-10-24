import Footer from './footerPrincipal/footerPrincipal'
import FAQ from './FAQ/FAQ'
import './Principal.css'
import React from 'react'
import img from '../Principal/imagem/teams.png' 
import img2 from '../Principal/imagem/talks.png'
import img3 from '../Principal/imagem/rede.png'
import { Grid } from '@material-ui/core'
import { Box } from '@mui/material'
import 'react-alice-carousel/lib/alice-carousel.css'
import Solutioners from './Solutioners/Solutioners'
import { Link } from 'react-router-dom'
import Parceiros from './Parceiros/Parceiros'
import { FaRocket, FaLightbulb, FaBrain } from 'react-icons/fa';



function Principal() {
    
    return (
        <>
            {/* cabeçalho*/}
            <header className="header-menu">
                <div className='title'>
                    <h1>Soluti<span className='title2'>ON</span></h1>
                </div>

                <Grid xs={12} className="nav">
                    <ul className="lista-menu">
                        <li>
                            <a href="#sobre">Sobre</a>
                        </li>
                        <li>
                            <a href="#valores">Valores</a>
                        </li>

                        <li>
                            <a href="#alcance">Alcance</a>
                        </li>
                        <li>
                            <a href="#parceiros">Parceiros</a>
                        </li>

                        <Link to='/login'>
                            <li>
                                <a href="#login" className='login'>Login</a>
                            </li>
                        </Link>
                    </ul>
                    
                </Grid>
            </header>

            {/* página principal  */}
            <Grid xs= {12} className="main" >

                {/* metade da tela p/ o texto */}
                <aside>
                    <h2>Soluti<span>ON</span></h2>
                    <h3 className="text-gradient">Soluções empresariais</h3>
                    <p>Promovendo conexões resilientes e agregando valor aos potenciais negócios.</p>


                    <Link to='/cadastrousuario'>
                        <input type="submit" value="Cadastre a sua empresa!" className="enviar" />
                    </Link>
                </aside>

                <article>
                    <img src={img} alt="Personagens inanimados dialogando." />
                </article>
            </Grid>        

                <section className='sobre'>
                    <article id="sobre" >
                        <div className='sectionSobre'>
                            <h3>Sobre nós<span>_</span></h3>
                            <p>A Soluti<span>ON</span> trata-se de uma rede social que tem por objetivo promover a conexão entre pequenas empresas, de modo a construir infraestruturas resilientes e fortalecer a inovação inclusiva, em conformidade com os preceitos da ODS 9.
                                Dado o cenário em que a ocorrência da pandemia interviu diretamente na comunicação dos menores negócios (em termos de proporção), pensamos na proposição de uma rede social que solucionasse essa problemática da falta de acesso à uma rede maior que verdadeiramente levasse em consideração a necessidade de uma comunicação ágil à nível nacional. 
                                Por se tratar de uma estratégia de negócio atrelado ao valor de mercado, o grupo integrador enxergou a possibilidade de atuar em uma área na qual há uma problemática sem uma específica <span>solução</span>. Logo, a ampliação dessa rede promoverá um maior fortalecimento do comércio nacional pautado na funcionalidade prática.</p>
                        </div>
                    </article>
                </section>

                <section className='valores'>
                    <article id="valores">
                        <div>
                            <h3>Valores da Soluti<span>ON</span></h3>
                        </div>
                        <div>
                            <div className='cards'>
                                <div className='card'> 
                                    <div className='sbox'>
                                        <FaRocket className='iconlogo' />
                                        <h4>Missão</h4>
                                        <p>Promover uma maior integração das pequenas empresas por meio de um canal de comunicação, 
                                            de modo a construir um espaço resiliente e fortalecer a inovação inclusiva à nivel nacional.</p>
                                    </div>
                                </div>

                                <div className='card'> 
                                    <div className='sbox'>
                                        < FaBrain className='iconlogo' />
                                        <h4>Valores</h4>
                                        <p>Nossa cultura é alicerçada continuamente sobre os pilares da colaboração, resiliência e inclusão, garantindo integridade e legitimidade a todos os públicos da nossa rede.
                                        </p>
                                    </div>
                                </div>

                                <div className='card'> 
                                    <div className='sbox'>
                                        <FaLightbulb className='iconlogo' />
                                        <h4>Mindset</h4>
                                        <p>Inovação perpassa todos os nossos setores colaborativos.
                                            Além disso, fomentamos o acesso a serviços financeiros para obtenção de crédito a fim de impulsionar pequenos negócios.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                <Link to='/cadastrousuario'>
                    <input type="submit" value="Faça parte!" className="enviar2" />
                </Link>
                    </article>
                </section>

                <section>
                    <article id="alcance">
                        <div className='datah'>
                            <ul>
                                <li><div className='count'>5000+</div><span>Empresas</span></li>
                                <li><div className='count'>4000+</div><span>Conexões</span></li>
                                <li><div className='count'>3000+</div><span>Cooperativas</span></li>

                            </ul>
                        </div>
                    </article>
                </section>


                <section>
                    <article id="parceiros">

                        <Parceiros/>

                    </article>
                </section>


                <section>
                    <article id="servicos">

                    </article>
                </section>

                <section>
                    <article>
                        <FAQ/>
                    </article>
                    
                </section>

                <section>
                    <article>
                        <Solutioners/>
                    </article>
                </section>


                <div>
                    <Footer />
                </div>






        </>
    )
}


export default Principal
