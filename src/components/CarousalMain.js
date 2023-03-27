import Carousel from 'react-bootstrap/Carousel';
import style from '../common-style.module.css';
function CarousalMain() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className={style.hiddenMobile} src="https://placehold.jp/1920x650.png" alt="First slide"/>
        <img className={style.hiddenDesktop} src="https://placehold.jp/1080x1190.png" alt="First mobile slide"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className={style.hiddenMobile} src="https://placehold.jp/1920x650.png" alt="First slide"/>
        <img className={style.hiddenDesktop} src="https://placehold.jp/1080x1190.png" alt="First mobile slide"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className={style.hiddenMobile} src="https://placehold.jp/1920x650.png" alt="First slide"/>
        <img className={style.hiddenDesktop} src="https://placehold.jp/1080x1190.png" alt="First mobile slide"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarousalMain;