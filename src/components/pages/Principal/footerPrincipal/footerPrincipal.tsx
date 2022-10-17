import './footerPrincipal.css'

function footerPrincipal(){
return(

<section className="footer">
                <footer>
                    <div className="itensFooter">
                        <div>
                            <div className="footerLeft">
                                <h3 className="soluti" >SOLUTI <span className="on" > ON </span> </h3>

                                <div className="footerLinks" >
                                    <a href="#">Home</a>
                                     | 
                                    <a href="#">Sobre Nós</a>
                                     | 
                                    <a href="#">Contato</a>
                                     | 
                                    <a href="#">Solutioners</a>
                                </div>

                                <p className="footerCompanyName">Copyright © 2022 <strong>Soluti ON</strong> All rights reserved</p>
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
                                    <span>Sobre nós</span>
                                    A <strong >SOLUTION</strong> é uma rede estratégica e ágil para pequenos negócios, visando fortalecer o comércio nacional no rol do mercado financeiro até 2030.
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