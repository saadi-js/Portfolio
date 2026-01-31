import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      success: string;
      danger: string;
      warning: string;
      info: string;
      light: string;
      dark: string;
      background: string;
      text: string;
      textLight: string;
      border: string;
      gradients: {
        primary: string;
        secondary: string;
      };
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
      large: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    shadows: {
      light: string;
      medium: string;
      heavy: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}