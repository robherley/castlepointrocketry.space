import star1 from '../../images/particles/star1.png'
import star2 from '../../images/particles/star2.png'

const config = {
  particles: {
    number: {
      value: 100,
    },
    shape: {
      type: 'images',
      images: [
        {
          src: star1,
          width: 64,
          height: 64,
        },
        {
          src: star2,
          width: 44,
          height: 44,
        },
      ],
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: true,
        speed: 0.2,
        opacity_min: 0.2,
        sync: false,
      },
    },
    size: {
      value: 6,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 2,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 0.15,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
      },
    },
  },
  retina_detect: true,
}

export default config
