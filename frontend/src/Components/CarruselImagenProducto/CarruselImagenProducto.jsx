import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const ProductDetailsCarousel = () => {
    return(
        <div className="text-white text-[20px] w-full max-w-[1300px] mx-auto sticky top-[50px]">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="producCarousel"
            >
                <img src="/ComputacionTienda-main/frontend/public/Imagenes/Productos/Componentes/Micros/02_a.jpg" alt="Foto 1 microprocesador" />
                <img src="/ComputacionTienda-main/frontend/public/Imagenes/Productos/Componentes/Micros/02_b.jpg" alt="Foto 1 microprocesador" />
                <img src="/ComputacionTienda-main/frontend/public/Imagenes/Productos/Componentes/Micros/02_c.jpg" alt="Foto 1 microprocesador" />
            </Carousel>
        </div>
    );
};

export default ProductDetailsCarousel;