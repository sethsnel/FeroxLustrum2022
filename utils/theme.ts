import { Theme, ThemeUIContextValue, useThemeUI } from 'theme-ui'

const makeTheme = <T extends Theme>(t: T) => t

export type ThemeType = typeof theme

interface ThemeContextValue extends Omit<ThemeUIContextValue, 'theme'> {
  theme: ThemeType
}

export const useTheme = useThemeUI as unknown as () => ThemeContextValue

const theme = makeTheme({
  config: {
    useCustomProperties: true,
    useColorSchemeMediaQuery: true,
    useLocalStorage: true,
  },
  breakpoints: ['30em', '47em', '64em', '100em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  borders: [0],
  colors: {
    text: 'rgba(245,245,245,0.9)',
    background: 'rgba(220,220,220,0.7)',
    primary: 'rgba(168,74,92,0.8)',
    secondary: 'rgba(245,245,245,0.9)',
    muted: '#000',
    highlight: '#9f9f9f',
    gray: '#6c6c6c',
    accent: '#3f3f3f',
    nextjs: '#352065',
    code: '#fdf6e3',
    shade1: '#d2d2d2',
    shade2: '#e0e0e0',
    /* alert colors */
    info: '#BFDBFE',
    success: '#A7F3D0',
    warning: '#FDE68A',
    danger: '#FECACA',
    infoBorder: '#60A5FA',
    successBorder: '#34D399',
    warningBorder: '#FBBF24',
    dangerBorder: '#F87171',
    // modes: {
    //   dark: {
    //     text: '#c1bdb8',
    //     background: '#161819',
    //     primary: '#d2d2d2',
    //     secondary: '#b2b2b2',
    //     muted: '#202020',
    //     highlight: '#3c3c3c',
    //     gray: '#999',
    //     accent: '#e0e0e0',
    //     nextjs: '#b2b2b2',
    //     code: '#1b1b1b',
    //     shade1: '#0a0a0a',
    //     shade2: '#101010',
    //     info: '#022c5c',
    //     success: '#0a4e37',
    //     warning: '#604e02',
    //     danger: '#420202',
    //     infoBorder: '#043676',
    //     successBorder: '#06a271',
    //     warningBorder: '#925003',
    //     dangerBorder: '#7a1413',
    //   },
    // },
  },
  fonts: {
    body: "'Times New Roman', 'Lato', 'Inter', sans-serif",
    light: "'Times New Roman', 'Lato', 'Inter', sans-serif",
    medium: "'Times New Roman', 'Lato', 'Inter', sans-serif",
    heading: "'Times New Roman', 'Lato', 'Inter', sans-serif",
    code: "'Fira Code', monospace",
    title: "'Times New Roman', 'Lato', 'Inter', sans-serif",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    light: 300,
    body: 400,
    medium: 500,
    heading: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  textStyles: {
    title: {
      fontFamily: 'title',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    medium: {
      fontFamily: 'medium',
      fontWeight: 'medium',
      lineHeight: 'heading',
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    body: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    light: {
      fontFamily: 'light',
      fontWeight: 'light',
      lineHeight: 'light',
    },
  },
  styles: {
    Container: {
      p: 3,
      maxWidth: 1024,
    },
    root: {
      variant: 'textStyles.body',
    },
    h1: {
      variant: 'textStyles.title',
      fontSize: [4, 5, 6],
      color: 'primary',
    },
    h2: {
      variant: 'textStyles.heading',
      fontSize: [3, 4, 5],
      color: 'primary',
    },
    h3: {
      variant: 'textStyles.heading',
      fontSize: [3, 4],
      color: 'primary',
    },
    h4: {
      variant: 'textStyles.medium',
      fontSize: [3, 4],
      color: 'primary',
    },
    h5: {
      variant: 'textStyles.medium',
      fontSize: 2,
    },
    h6: {
      variant: 'textStyles.medium',
      fontSize: 1,
    },
    p: {
      fontSize: [1, 2, 3],
    },
    em: {
      fontFamily: 'light',
      fontSize: [1, 2, 3],
    },
    a: {
      color: 'primary',
      textDecoration: 'underline',
      '&:hover': {
        color: 'secondary',
        backgroundColor: 'primary',
        textDecoration: 'none',
        cursor: 'pointer',
      },
    },
    blockquote: {
      fontSize: [1, 2, 3],
      variant: 'textStyles.body',
      margin: '1.45rem',
      padding: '0 0 0 1rem',
      borderColor: 'primary',
      borderStyle: 'solid',
      borderTopWidth: 0,
      borderLeftWidth: 2,
      borderRightWidth: 0,
      borderBottomWidth: 0,
    },
    pre: {
      fontFamily: 'code',
      fontSize: [0, 1],
      p: [1, 2],
      color: 'text',
      bg: 'code',
      borderColor: 'accent',
      borderStyle: 'solid',
      borderWidth: 2,
    },
    span: {
      fontFamily: 'code',
      fontSize: 1,
      color: 'muted',
      bg: 'primary',
      px: 1,
    },
    inlineCode: {
      fontFamily: 'code',
      color: 'secondary',
      bg: 'muted',
      px: 2,
    },
    ul: {
      listStyleType: 'disc',
    },
    li: {
      my: 2,
    },
    table: {
      width: '100%',
      my: 4,
      borderCollapse: 'separate',
      borderSpacing: 0,
      'th,td': {
        textAlign: 'left',
        py: '4px',
        pr: '4px',
        pl: 0,
        borderColor: 'text',
        borderBottomStyle: 'solid',
      },
    },
    th: {
      backgroundColor: 'muted',
      verticalAlign: 'bottom',
      borderBottomWidth: 8,
    },
    td: {
      verticalAlign: 'top',
      borderBottomWidth: 4,
    },
    hr: {
      border: 0,
      borderBottom: '8px solid',
      borderColor: 'text',
    },
    buttons: {
      primary: {
        color: 'background',
        bg: 'primary',
        '&:hover': {
          bg: 'text',
        },
      },
      secondary: {
        color: 'background',
        bg: 'secondary',
      },
    },
  },
})

export default theme
