import React from 'react'
import Slider from 'react-slick'

const settings = {
    arrows: true,
    dots: true,
    infinte: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:3000,
    focusOnSelect: true
}

const generateSlides = ({ slides }) => {
    if (slides) {
        return (
            <Slider {...settings}>
                {slides.map((slide) => {
                    return (
                        <div key={slide.id} className="item-slider" style={{ background: `url(/images/covers/${slide.cover})` }}>
                            <div className="caption">
                                <h4>{slide.topic}</h4>
                                <p>{slide.title}</p>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        )
    }
}

const Jumbotron = (props) => {
    return (
        <div>
            {generateSlides(props)}
        </div>
    )
}

export default Jumbotron