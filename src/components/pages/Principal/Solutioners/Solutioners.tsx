import React from 'react';
import './Solutioners.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import van from './fotoGalera/van.png';
import thais from './fotoGalera/thais.png';
import pedro from './fotoGalera/pedro.png';
import vini from './fotoGalera/vini.png';
import rurie from './fotoGalera/rurie.png';
import mari from './fotoGalera/mari.png';
import ana from './fotoGalera/ana.png';
import anab from './fotoGalera/anab.jpg';

import git from './fotoGalera/logotipo-do-github.png'
import linkedin from './fotoGalera/logotipo-do-linkedin.png'

function Solutioners() {

  //responsividade - qtd de itens que carrega na tela
  const responsive = {
    0: { items: 1 },
    500: { items: 3 },
    1024: { items: 4 },
  };
  

  //fotos do carrossel 
  const items = [
    <div className="cardsolu">
      <div className='item'>
        <img src={van} alt="Vanessa"></img>    
        </div>
          <h1 className='nominho'>Vanessa Isabella</h1>
          <span className='funcaozinha'>Desenvolvedora Fullstack Java Jr.</span>
          <ul>
            <li><a href="https://github.com/VanessaIsabella" target="_blank"> 
            <img src={git} alt="logo github"></img></a>
          </li></ul>
          <ul>
            <li><a href="https://www.linkedin.com/in/vanessa-isabella-oliveira/" target="_blank"> 
            <img src={linkedin} alt="logo linkedin"></img></a>
          </li>
          </ul>
    </div>,

<div className="cardsolu">
<div className='item'>
  <img src={pedro} alt="Pedro"></img>    
  </div>
    <h1 className='nominho'>Pedro Henrique</h1>
    <span className='funcaozinha'>Desenvolvedor Fullstack Java Jr.</span>
    <ul>
      <li><a href="https://github.com/Pddro1" target="_blank"> 
      <img src={git} alt="logo github"></img></a>
    </li></ul>
    <ul>
      <li><a href="https://www.linkedin.com/in/pedro-camargo15/" target="_blank"> 
      <img src={linkedin} alt="logo linkedin"></img></a>
    </li>
    </ul>
</div>,

<div className="cardsolu">
<div className='item'>
  <img src={thais} alt="Thais"></img>    
  </div>
    <h1 className='nominho'>Thais Melim</h1>
    <span className='funcaozinha'>Desenvolvedora Fullstack Java Jr.</span>
    <ul>
      <li><a href="https://github.com/thaismelim" target="_blank"> 
      <img src={git} alt="logo github"></img></a>
    </li></ul>
    <ul>
      <li><a href="https://www.linkedin.com/in/thais-melim/" target="_blank"> 
      <img src={linkedin} alt="logo linkedin"></img></a>
    </li>
    </ul>
</div>,

<div className="cardsolu">
<div className='item'>
  <img src={rurie} alt="Rurie"></img>    
  </div>
    <h1 className='nominho'>Rurie Miguel</h1>
    <span className='funcaozinha'>Desenvolvedor Fullstack Java Jr.</span>
    <ul>
      <li><a href="https://github.com/ruriemiguel" target="_blank"> 
      <img src={git} alt="logo github"></img></a>
    </li></ul>
    <ul>
      <li><a href="https://www.linkedin.com/in/ruriemiguel/" target="_blank"> 
      <img src={linkedin} alt="logo linkedin"></img></a>
    </li>
    </ul>
</div>,

<div className="cardsolu">
<div className='item'>
  <img src={ana} alt="Ana"></img>    
  </div>
    <h1 className='nominho'>Ana Santos</h1>
    <span className='funcaozinha'>Desenvolvedora Fullstack Java Jr.</span>
    <ul>
      <li><a href="https://github.com/anabiax" target="_blank"> 
      <img src={git} alt="logo github"></img></a>
    </li></ul>
    <ul>
      <li><a href="https://www.linkedin.com/in/anabsantoss" target="_blank"> 
      <img src={linkedin} alt="logo linkedin"></img></a>
    </li>
    </ul>
</div>,

<div className="cardsolu">
<div className='item'>
  <img src={vini} alt="Vini"></img>    
  </div>
    <h1 className='nominho'>Vinicius Lopes</h1>
    <span className='funcaozinha'>Desenvolvedor Fullstack Java Jr.</span>
    <ul>
      <li><a href="https://github.com/viniciuslopes98" target="_blank"> 
      <img src={git} alt="logo github"></img></a>
    </li></ul>
    <ul>
      <li><a href="https://www.linkedin.com/in/vinicius-l-4181b9ba" target="_blank"> 
      <img src={linkedin} alt="logo linkedin"></img></a>
    </li>
    </ul>
</div>,

<div className="cardsolu">
<div className='item'>
  <img src={mari} alt="Mari"></img>    
  </div>
    <h1 className='nominho'>Mariana Melo</h1>
    <span className='funcaozinha'>Desenvolvedora Fullstack Java Jr.</span>
    <ul>
      <li><a href="https://github.com/Marianadsm" target="_blank"> 
      <img src={git} alt="logo github"></img></a>
    </li></ul>
    <ul>
      <li><a href="https://www.linkedin.com/in/marianadsm/" target="_blank"> 
      <img src={linkedin} alt="logo linkedin"></img></a>
    </li>
    </ul>
</div>,


  ];
  return (
    <div className="App">

      <h1>Os Solutioners por trás das suas soluções</h1>
      
      <AliceCarousel
        mouseTracking
        disableButtonsControls={false}
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        infinite
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        animationType="fadeout"
        disableDotsControls
      />
    </div>
  );
}

export default Solutioners;







