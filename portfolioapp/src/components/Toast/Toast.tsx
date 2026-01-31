import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const ToastContainer = styled.div<{ type: 'success' | 'error' | 'info' }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: ${props => {
    switch (props.type) {
      case 'success':
        return props.theme.colors.success;
      case 'error':
        return props.theme.colors.danger;
      default:
        return props.theme.colors.primary;
    }
  }};
  color: white;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.heavy};
  animation: ${slideUp} 0.3s ease-out;
  max-width: 400px;
  z-index: 10000;
`;

const ToastMessage = styled.p`
  margin: 0;
  font-weight: 500;
`;

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
}

const Toast: React.FC<ToastProps> = ({ message, type = 'info' }) => {
  return (
    <ToastContainer type={type} role="alert" aria-live="assertive">
      <ToastMessage>{message}</ToastMessage>
    </ToastContainer>
  );
};

export default Toast;