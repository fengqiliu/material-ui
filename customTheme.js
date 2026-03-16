import { createTheme } from '@mui/material/styles';

// Material-UI Design Specifications Custom Theme
const theme = createTheme({
  // 1. 响应式断点 (Breakpoints)
  // 默认值: xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },

  // 2. 间距系统 (Spacing)
  // 默认基础单位: 10px
  // spacing(1) = 10px, spacing(2) = 20px
  spacing: 10,

  // 3. 方向 (Direction)
  direction: 'ltr',

  // 4. 字体排版 (Typography)
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    htmlFontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    // 标题系列
    h1: {
      fontSize: '6rem',     // 96px
      fontWeight: 300,
      lineHeight: 1.167,
      letterSpacing: '-1.5px',
    },
    h2: {
      fontSize: '3.75rem',  // 60px
      fontWeight: 300,
      lineHeight: 1.2,
      letterSpacing: '-0.5px',
    },
    h3: {
      fontSize: '3rem',     // 48px
      fontWeight: 400,
      lineHeight: 1.167,
      letterSpacing: '0',
    },
    h4: {
      fontSize: '2.125rem', // 34px
      fontWeight: 400,
      lineHeight: 1.235,
      letterSpacing: '0.25px',
    },
    h5: {
      fontSize: '1.5rem',  // 24px
      fontWeight: 400,
      lineHeight: 1.334,
      letterSpacing: '0',
    },
    h6: {
      fontSize: '1.25rem', // 20px
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: '0.15px',
    },

    // 正文系列
    subtitle1: {
      fontSize: '1rem',    // 16px
      fontWeight: 400,
      lineHeight: 1.75,
      letterSpacing: '0.15px',
    },
    subtitle2: {
      fontSize: '0.875rem', // 14px
      fontWeight: 500,
      lineHeight: 1.57,
      letterSpacing: '0.1px',
    },
    body1: {
      fontSize: '1rem',    // 16px
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.15px',
    },
    body2: {
      fontSize: '0.875rem', // 14px
      fontWeight: 400,
      lineHeight: 1.43,
      letterSpacing: '0.15px',
    },

    // 特殊样式
    button: {
      fontSize: '0.875rem', // 14px
      fontWeight: 500,
      lineHeight: 1.75,
      letterSpacing: '0.4px',
      textTransform: 'uppercase',
    },
    caption: {
      fontSize: '0.75rem', // 12px
      fontWeight: 400,
      lineHeight: 1.66,
      letterSpacing: '0.4px',
    },
    overline: {
      fontSize: '0.75rem', // 12px
      fontWeight: 400,
      lineHeight: 2.66,
      letterSpacing: '1px',
      textTransform: 'uppercase',
    },
  },

  // 5. 颜色系统 (Color Palette)
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',    // blue[700]
      light: '#42a5f5',   // blue[400]
      dark: '#1565c0',    // blue[800]
      contrastText: '#fff',
    },
    secondary: {
      main: '#9c27b0',    // purple[500]
      light: '#ba68c8',   // purple[300]
      dark: '#7b1fa2',    // purple[700]
      contrastText: '#fff',
    },
    error: {
      main: '#d32f2f',
      light: '#ef5350',
      dark: '#c62828',
    },
    warning: {
      main: '#ed6c02',
      light: '#ff9800',
      dark: '#ef6c00',
    },
    info: {
      main: '#0288d1',
      light: '#03a9f4',
      dark: '#01579b',
    },
    success: {
      main: '#2e7d32',
      light: '#4caf50',
      dark: '#1b5e20',
    },
    // 背景和文字颜色
    background: {
      default: '#fff',
      paper: '#fff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    // 分隔线
    divider: 'rgba(0, 0, 0, 0.12)',
  },

  // 6. 形状 (Shape)
  shape: {
    borderRadius: 4,
  },

  // 7. 阴影 (Shadows)
  // 25级阴影 (0-24)，Material Design 规范
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
    '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
    '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
  ],

  // 8. Z-Index 层级
  zIndex: {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },

  // 9. 过渡动画 (Transitions)
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most common recommended timing
      standard: 300,
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },

  // 10. 组件默认样式 (Component Defaults)
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // 移除按钮大写
          borderRadius: 4,
          padding: '8px 16px',
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 1,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

export default theme;