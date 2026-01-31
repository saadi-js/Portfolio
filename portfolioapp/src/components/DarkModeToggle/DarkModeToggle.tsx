import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';

const ToggleButton = styled.button<{ $isDark: boolean }>`
  position: relative;
  width: 60px;
  height: 32px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.$isDark 
    ? 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)' 
    : 'linear-gradient(135deg, #f39c12 0%, #f1c40f 100%)'
  };
  box-shadow: ${props => props.theme.shadows.medium};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.heavy};
  }
`;

const ToggleCircle = styled.div<{ $isDark: boolean }>`
  position: absolute;
  top: 4px;
  left: ${props => props.$isDark ? '32px' : '4px'};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${props => props.$isDark ? '#f8f9fa' : 'white'};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const IconWrapper = styled.div<{ $isDark: boolean }>`
  color: ${props => props.$isDark ? '#f39c12' : '#2c3e50'};
  font-size: 14px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DarkModeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <ToggleButton 
      onClick={toggleTheme} 
      $isDark={isDark}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <ToggleCircle $isDark={isDark}>
        <IconWrapper $isDark={isDark}>
          {isDark ? '🌙' : '☀️'}
        </IconWrapper>
      </ToggleCircle>
    </ToggleButton>
  );
};

export default DarkModeToggle;