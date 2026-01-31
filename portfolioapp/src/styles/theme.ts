const lightTheme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
    background: '#ffffff',
    surface: '#ffffff',
    text: '#333333',
    textLight: '#666666',
    textInverse: '#ffffff',
    border: '#e9ecef',
    gradients: {
      primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    }
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
    large: '1200px',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem',
  },
  shadows: {
    light: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.15)',
    heavy: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
  }
};

const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    background: '#121212',
    surface: '#1e1e1e',
    text: '#ffffff',
    textLight: '#b3b3b3',
    textInverse: '#333333',
    border: '#333333',
    light: '#2a2a2a',
    dark: '#0a0a0a',
    gradients: {
      primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    }
  },
  shadows: {
    light: '0 2px 4px rgba(0, 0, 0, 0.3)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.4)',
    heavy: '0 8px 16px rgba(0, 0, 0, 0.5)',
  },
};

export { lightTheme, darkTheme };
export default lightTheme;