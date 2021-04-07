const FONT_FALLBACK =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif"

const theme = {
  size: {
    maxWidth: '70rem',
  },
  font: {
    family: {
      default: `Inter, ${FONT_FALLBACK}`,
      heading: `Alata, ${FONT_FALLBACK}`,
    },
    weight: {
      light: 300,
      regular: 400,
      bold: 700,
    },
  },
  color: {
    bg: '#151719',
    bg2: '#26282C',
    bg3: 'rgba(197, 210, 220, 0.3)',
    gray: '#9ba9b4',
    light: '#fff',
    yellow: '#ffba08',
    hss: {
      blue: '#1e91d6',
      dark: '#0a1b35',
      red: '#991531',
      yellow: '#ffd966',
      orange: '#c75b1e',
      purple: '#8e2de2',
    },
  },
}

export default theme
