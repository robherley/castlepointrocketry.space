import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import photos from './photos'

const CarouselImage = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
  overflow: hidden;

  img {
    height: 100%;
    border-radius: 1rem;
  }
`

const StyledSlider = styled(Slider)`
  height: 600px;
  border-radius: 1rem;
  margin-top: 6rem;

  .slick-dots li button:before {
    color: ${({ theme }) => theme.color.yellow};
    font-size: 0.8rem;
    transition: all 300ms ease-in-out;
  }

  .slick-prev:before,
  .slick-next:before {
    display: none;
  }
`

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  }

  return (
    <StyledSlider {...settings}>
      {photos.map((p) => (
        <div key={p.alt}>
          {/* need this extra div bc react-slick forces inline styles */}
          <CarouselImage>
            <img alt={p.alt} src={p.src.default} />
          </CarouselImage>
        </div>
      ))}
    </StyledSlider>
  )
}

export default Carousel
