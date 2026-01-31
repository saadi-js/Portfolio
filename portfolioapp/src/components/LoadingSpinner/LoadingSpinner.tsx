import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div<{ fullScreen?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${props => props.fullScreen ? `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.9);
    z-index: 9999;
  ` : `
    padding: ${props.theme.spacing.xl};
    min-height: 200px;
  `}
`;

const Spinner = styled.div`
  border: 3px solid #f3f3f3;
  border-top: 3px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin-bottom: ${props => props.theme.spacing.md};
`;

const LoadingText = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: 1rem;
  margin: 0;
`;

interface LoadingSpinnerProps {
  text?: string;
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  text = "Loading...", 
  fullScreen = false 
}) => {
  return (
    <LoaderContainer fullScreen={fullScreen} role="status" aria-live="polite">
      <Spinner aria-hidden="true" />
      <LoadingText>{text}</LoadingText>
    </LoaderContainer>
  );
};

export default LoadingSpinner;