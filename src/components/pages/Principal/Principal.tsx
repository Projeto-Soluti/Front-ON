import Footer from './footerPrincipal/footerPrincipal'
import './Principal.css'
import React from 'react'
import img from '../Principal/imagem/bss.svg' // importando a imagem p/ ser chamada como variável lá embaixo - aí dá certo p/ fazer o deploy
import img2 from '../Principal/imagem/blockchain.png'
import { Grid } from '@material-ui/core'
import { Box } from '@mui/material'
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from "react-alice-carousel";
import Solutioners from './Solutioners/Solutioners'
import { Link } from 'react-router-dom'



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
                            <a href="#servicos">Serviços</a>
                        </li>
                        <li>
                            <a href="#parceiros">Parceiros</a>
                        </li>

                        <li>
                            <a href="#alcance">Alcance</a>
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
                    <p>conectando alguma coisa e blablablaaaaaaaaaaaaaaa</p>
                    <p>Promovendo pontes e agregando valor aos grandes negócios.</p>
                    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>


                    <Link to='/cadastrousuario'>
                        <input type="submit" value="Cadastre a sua empresa" className="enviar" />
                    </Link>
                </aside>

                <article>
                    <img src={img2} alt="COLOCAR ALGUMA DESCRIÇÃO MINIMAMENTE COERENTE" />
                </article>
            {/* RETIRAR ESSE MAIN ASSIM QUE POSSÍVEL */}
            </Grid>        

                <section className='sobre'>
                    <article id="sobre" >
                        <div className='sectionSobre'>
                            <h3>Sobre nós<span>_</span></h3>
                            <p>Melhor a gente se entender
                                E o que tiver que acontecer
                                Que dessa vez (seja pra sempre)
                                Pra que brincar de se esconder
                                Se o amor tocou eu e você
                                De um jeito assim tão diferente
                                Porque você não fica comigo hein?
                                Porque você não fica comigo (eu fico)
                                E deixa o meu amor te levar
                                A solidão a dois é um castigo, é um castigo
                                Sem essa de querer (complicar)</p>
                        </div>
                    </article>
                </section>

                <section className='valores'>
                    <article id="valores">
                        <div >
                            <h3>Valores da Soluti<span>ON</span></h3>
                        </div>
                        <div>
                            <div className='cards'>
                                <div className='card'> 
                                    <div className='sbox'>
                                        {/* <i class='fas fa-line-chart'></i> */}
                                        <h4>Mindset</h4>
                                        <p>O que aconteceu com aquele sentimento
                                            Cadê aquele brilho do teu olhar (do teu olhar)
                                            Não deixe que o tempo apague a nossa história
                                            Porque ainda é tempo pra recomeçar</p>
                                    </div>
                                </div>

                                <div className='card'> 
                                    <div className='sbox'>
                                        {/* <i class='fas fa-line-chart'></i> */}
                                        <h4>Missão</h4>
                                        <p>Sinto que a cada dia vai se desgastando
                                        O gosto dos seus beijos se amargando
                                        Que estamos convivendo por obrigação
                                        Você diz que não
                                        Vejo você chorando ao sair do banho
                                        Me surpreendo ao te ouvir dizendo
                                        Que quer tentar recomeçar do zero
                                        Tudo outra vez</p>
                                    </div>
                                </div>

                                <div className='card'> 
                                    <div className='sbox'>
                                        {/* <i class='fas fa-line-chart'></i> */}
                                        <h4>Valores</h4>
                                        <p>To fazendo amor <br></br>
                                            Com outra pessoa <br></br>
                                            Mas meu coração <br></br>
                                            Vai ser pra sempre seu</p>
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
                    <article id="parceiros">

                    </article>
                </section>


                <section>
                    <article id="servicos">

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
                    <article id="faq">

                    </article>
                </section>


                <section>
                    <article id="login">

                    </article>
                </section>


            <div>
                <Footer />
            </div>






        </>
    )
}


export default Principal
