import React from 'react';
import banner from '../assets/banner.png'
import banner2 from '../assets/banner 2.png'
import banner3 from '../assets/banner 3.png'

function Carousel() {
    return (
        <div className='flex justify-center pt-20' id='home'>
            <div className="carousel w-full max-w-7xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={banner}
                        alt="Slide 1"
                        className="w-full h-auto md:h-full"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle w-10 h-10 md:w-6 md:h-6">❮</a>
                        <a href="#slide2" className="btn btn-circle w-10 h-10 md:w-6 md:h-6">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={banner2}
                        alt="Slide 2"
                        className="w-full h-auto md:h-full"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle w-10 h-10 md:w-6 md:h-6">❮</a>
                        <a href="#slide3" className="btn btn-circle w-10 h-10 md:w-6 md:h-6">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={banner3}
                        alt="Slide 3"
                        className="w-full h-auto md:h-full"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle w-10 h-10 md:w-6 md:h-6">❮</a>
                        <a href="#slide4" className="btn btn-circle w-10 h-10 md:w-6 md:h-6">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
