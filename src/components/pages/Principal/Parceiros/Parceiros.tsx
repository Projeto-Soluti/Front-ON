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
          <div className="banco" >
          <a href="https://www.sicoob.com.br/"><img src="http://acian.com.br/wp-content/uploads/2019/08/logo-sicoob.jpg"  alt="Sicoob"/></a>
          <a href="https://www.bndes.gov.br/"><img src="https://www.amstedmaxion.com.br/wp-content/uploads/2022/07/BNDES-logo.jpg" alt="Bndes"/></a>
          <a href="https://www.daycoval.com.br/"><img src="https://www.sicredi.com.br/media/coop/filer_public/2020/05/13/logo_para__noticias_-_site.jpg" alt="Sicredi"/></a>
          <a href="https://www.bb.com.br/"><img src="https://i0.wp.com/www.spportoes.com.br/wp-content/uploads/2016/06/logo-banco-do-brasil.jpg" alt="Banco Brasil"/></a>
          <a href="https://www.daycoval.com.br/"><img src="https://q3m9s2m7.rocketcdn.me/wp-content/uploads/2022/02/banco-daycoval-consignado.png" alt="Banco Daycoval"/></a>
          </div>
          </div>
      ]
      
    return(
      <div>

      <h1>Conheça nossos parceiros </h1>
      
      <AliceCarousel
        mouseTracking
        disableButtonsControls={false}
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        infinite
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={800}
        animationDuration={800}
        animationType="fadeout"
        />
    </div>
      )
}

export default Parceiros;
