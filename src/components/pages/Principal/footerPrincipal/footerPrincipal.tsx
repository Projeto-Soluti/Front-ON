import './footerPrincipal.css'

function footerPrincipal() {
    return (

        <section className="footer">
            <footer>
                <div className="itensFooter">
                    <div>
                        <div className="footerLeft">
                            <h3 className="soluti" >SOLUTI<span className="on" >ON</span> </h3>

                            <div  >
                                <ul className="footerLinks">
                                    <li>
                                        <a href="#home">Home</a>
                                    </li>

                                    <li>
                                        <a href="#sobre">Sobre nós</a>
                                    </li>
                                    <li>
                                        <a href="#contato">Contato</a>
                                    </li>
                                    <li>
                                        <a href="#solutioners">Solutioners</a>
                                    </li>


                                </ul>
                            </div>

                            <p className="footerCompanyName">Copyright © 2022 <strong>SolutiON</strong> All rights reserved</p>
                        </div>
                    </div>
                    <div>
                        <div className="footerCenter">
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
                        <div className="footerRight">
                            <p className="footerCompanyAbout">
                                <span className= "sobrenos">Sobre nós</span>
                                A <strong >SolutiON</strong> é uma rede estratégica para pequenos negócios, visando fortalecer o comércio nacional no rol do mercado financeiro até 2030.
                            </p>
                            <div className="footerIcons">
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
    )
}

export default footerPrincipal;