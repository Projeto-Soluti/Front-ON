import React from 'react';
import './Solutioners.css';
//Install and import the library
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import vane from './fotoGalera/vane.png';
import img2 from './fotoGalera/thais.png';
import img3 from './fotoGalera/pedro.png';
import img4 from './fotoGalera/vini.png';
import img5 from './fotoGalera/rurie.png';
import img6 from './fotoGalera/mari.png';
import img7 from './fotoGalera/ana.png';

function Solutioners() {

  //responsividade - qtd de itens que carrega na tela
  const responsive = {
    0: { items: 1 },
    500: { items: 3 },
    1024: { items: 4 },
  };
  

  //fotos do carrossel 
  const items = [
    <div className="item">
      <img src="https://github.com/VanessaIsabella.png" alt="Vanessa"/>
    </div>,
    <div className="item">
      <img src={vane} alt="Thais"/>
    </div>,
    <div className="item">
      <img src={img3} alt="Pedro"/>
    </div>,
    <div className="item">
      <img src={img4} alt="Vini"/>
    </div>,
    <div className="item">
      <img src={img5} alt="Rurie"/>
    </div>,
    <div className="item">
      <img src={img6} alt="Mariana"/>
    </div>,
    <div className="item">
      <img src={img7} alt="Ana"/>
    </div>,

  ];
  return (
    <div className="App">

      <h1>Os Solutioners por trás das suas soluções</h1>
      
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        infinite
      />
    </div>
  );
}

export default Solutioners;