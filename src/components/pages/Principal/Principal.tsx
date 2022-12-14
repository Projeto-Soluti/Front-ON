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
import { FaRocket, FaLightbulb, FaBrain } from 'react-icons/fa'
import { MdOutlineDarkMode } from 'react-icons/md'
import * as ReactDOM from 'react-dom'
import { DarkModeSwitch } from 'react-toggle-dark-mode'



const Principal = () => {

    const [isDarkMode, setDarkMode] = React.useState(false)

    const toggleDarkMode = (checked: boolean) => {
        setDarkMode(checked);
    }
    
    return (
        <>
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

                    <DarkModeSwitch
                        className='effect'
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                        size={50}
                    />

            </header>

            {/* p??gina principal  */}
            <Grid xs= {12} className="main" >

                {/* metade da tela p/ o texto */}
                <aside>
                    <h2>Soluti<span>ON</span></h2>
                    <h3 className="text-gradient">Solu????es empresariais</h3>
                    <p>Promovendo conex??es resilientes e agregando valor aos potenciais neg??cios.</p>


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
                            <h3>Sobre n??s<span>_</span></h3>
                            <p>A Soluti<span>ON</span> trata-se de uma rede social que tem por objetivo promover a conex??o entre pequenas empresas, de modo a construir infraestruturas resilientes e fortalecer a inova????o inclusiva, em conformidade com os preceitos da ODS 9.
                                Dado o cen??rio em que a ocorr??ncia da pandemia interviu diretamente na comunica????o dos menores neg??cios (em termos de propor????o), pensamos na proposi????o de uma rede social que solucionasse essa problem??tica da falta de acesso ?? uma rede maior que verdadeiramente levasse em considera????o a necessidade de uma comunica????o ??gil ?? n??vel nacional. 
                                Por se tratar de uma estrat??gia de neg??cio atrelado ao valor de mercado, o grupo integrador enxergou a possibilidade de atuar em uma ??rea na qual h?? uma problem??tica sem uma espec??fica <span>solu????o</span>. Logo, a amplia????o dessa rede promover?? um maior fortalecimento do com??rcio nacional pautado na funcionalidade pr??tica.</p>
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
                                        <h4>Miss??o</h4>
                                        <p>Promover uma maior integra????o das pequenas empresas por meio de um canal de comunica????o, 
                                            de modo a construir um espa??o resiliente e fortalecer a inova????o inclusiva ?? nivel nacional.</p>
                                    </div>
                                </div>

                                <div className='card'> 
                                    <div className='sbox'>
                                        < FaBrain className='iconlogo' />
                                        <h4>Valores</h4>
                                        <p>Nossa cultura ?? alicer??ada continuamente sobre os pilares da colabora????o, resili??ncia e inclus??o, garantindo integridade e legitimidade a todos os p??blicos da nossa rede.
                                        </p>
                                    </div>
                                </div>

                                <div className='card'> 
                                    <div className='sbox'>
                                        <FaLightbulb className='iconlogo' />
                                        <h4>Mindset</h4>
                                        <p>Inova????o perpassa todos os nossos setores colaborativos.
                                            Al??m disso, fomentamos o acesso a servi??os financeiros para obten????o de cr??dito a fim de impulsionar pequenos neg??cios.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                <Link to='/cadastrousuario'>
                    <input type="submit" value="Fa??a parte!" className="enviar2" />
                </Link>
                    </article>
                </section>

                <section>
                    <article id="alcance">
                        <div className='datah'>
                            <ul>
                                <li><div className='count'>5000+</div><span>Empresas</span></li>
                                <li><div className='count'>4000+</div><span>Conex??es</span></li>
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
