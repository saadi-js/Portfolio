import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header/Header';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import ProjectVisualization from './pages/ProjectVisualization/ProjectVisualization';

const AppContent: React.FC = () => {
  const { theme } = useTheme();

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      <ErrorBoundary>
        <Router>
          <div className="App">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:projectId" element={<ProjectVisualization />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </div>
        </Router>
      </ErrorBoundary>
    </StyledThemeProvider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;