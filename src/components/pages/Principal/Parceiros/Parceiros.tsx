import './Parceiros.css'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

function Parceiros(){

    const responsive = {
        0: { items: 1 },
        500: { items: 3 },
        1024: { items: 4 },
      };

      const items = [
        <div className="item">
          <div className="banco"></div>
          <a href="https://www.sicoob.com.br/"><img src="https://cdn.cookielaw.org/logos/2120f93f-21cc-4b68-9b49-e6d689047dd4/abe00d3c-1e31-48f7-9f85-876199b6d687/1e8751c1-22ab-4706-afdb-4d16a50d8cb5/Sicoob_fundo_branco.png"  alt="Sicoob"/></a>
          <a href="https://www.bndes.gov.br/"><img src="https://www.gigasecurity.com.br/imagens/logo-bndes.png" alt="Bndes"/></a>
          <a href="https://www.bb.com.br/"><img src="https://res.cloudinary.com/compara/image/upload/v1638900941/leadgen/divisions/logos/Emprestimo-BR/banco-do-brasil_idc6uo.png" alt="Banco Brasil"/></a>
          </div>
      ]
      
    return(
      <div>

      <h1 className="tituloParceiros" >Conheça nossos parceiros </h1>
      
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
        disableDotsControls/>
    </div>
      )
}

export default Parceiros;
