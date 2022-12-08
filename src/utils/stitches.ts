import { createStitches } from '@stitches/react'

const breakpoints = {
  xs: undefined,
  sm: 425,
  md: 768,
  lg: 1024,
  xl: 1440,
}

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
      blue500: '#2196F3',
      green500: '#4CAF50',
      red500: '#F44336',
      yellow500: '#FFEB3B',
      black: '#000000',
      white: '#FFFFFF',
      pillGreen: '#0b713a',

      // aliases
      blue: '$blue500',
      green: '$green500',
      red: '$red500',
      yellow: '$yellow500',

      // variantions
      darkBlue: '#004C6C',
      darkerGrey: '#636363',
      darkGrey: '#555555',
      mediumDarkGrey: '#424242',
      darkRed: '#B81F41',
      activeBlue: '#003946',
      lightBlue: '#EFF4F6',
      lightBlack: '#212121',
      lightGrey: '#737373',
      lighterBlue: '#00608A',
      lighterGrey: '#CCCCCC',
      grey: '#666666',
      backgroundGrey: '#F7F7F7',
      dividerGrey: '#D7D7D7',
      progressGrey: '#E9ECEF',
      progressYellow: '#FFCB05',
      borderYellow: '#ffca0a',
      linkBlue: '#1B7499',
      lightOrange: '#C35000',
      lightYellow: '#FFF9E6',
    },
    space: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
      xxl: '40px',
      xxxl: '48px',
    },
    fontSizes: {},
    fonts: {},
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {
      bottom: 'inset 0 -1px 0 0 #D7D7D7',
    },
    zIndices: {},
    transitions: {},
  },
  media: {
    // only
    xs: `(max-width: ${breakpoints.sm - 0.001}px)`,
    sm: `(min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md - 0.001}px)`,
    md: `(min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg - 0.001}px)`,
    lg: `(min-width: ${breakpoints.lg}px) and (max-width: ${breakpoints.xl - 0.001}px)`,
    xl: `(min-width: ${breakpoints.xl}px)`,

    // min
    smMin: `(min-width: ${breakpoints.sm}px)`,
    mdMin: `(min-width: ${breakpoints.md}px)`,
    lgMin: `(min-width: ${breakpoints.lg}px)`,
    xlMin: `(min-width: ${breakpoints.xl}px)`,

    // max
    xsMax: `(max-width: ${breakpoints.sm - 0.001}px)`,
    smMax: `(max-width: ${breakpoints.md - 0.001}px)`,
    mdMax: `(max-width: ${breakpoints.lg - 0.001}px)`,
    lgMax: `(max-width: ${breakpoints.xl - 0.001}px)`,
  },
  utils: {},
  prefix: 'poc',
})
