import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import EjemploImagesCarrusel from './EjemploImagesCarrusel';
import gamerImg from '../../assets/Imagenes/carruselImagenes/gamer.jpeg';
import computaIAImg from '../../assets/Imagenes/carruselImagenes/computaIA.jpg';
import armarPCImg from '../../assets/Imagenes/carruselImagenes/armarPC.jpg';


function Carrusel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <EjemploImagesCarrusel src={gamerImg} alt="GAMER" />
        <Carousel.Caption>
          <h3 className="text-4xl font-bold">First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <EjemploImagesCarrusel src={computaIAImg} alt="COMPUIA" />
        <Carousel.Caption>
          <h3 className="text-4xl font-bold">Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <EjemploImagesCarrusel src={armarPCImg} alt="ARMARPC"/>
        <Carousel.Caption>
          <h3 className="text-4xl font-bold">Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;
