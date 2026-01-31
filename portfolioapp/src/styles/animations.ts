import styled, { keyframes, css } from 'styled-components';

// Keyframe animations
export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const slideInFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const bounceIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

export const typewriter = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Animation mixins
export const fadeInAnimation = css`
  animation: ${fadeIn} 0.8s ease-out forwards;
`;

export const slideInLeftAnimation = css`
  animation: ${slideInLeft} 0.8s ease-out forwards;
`;

export const slideInRightAnimation = css`
  animation: ${slideInRight} 0.8s ease-out forwards;
`;
export const slideInFromBottomAnimation = css`
  animation: ${slideInFromBottom} 0.8s ease-out forwards;
`;
export const bounceInAnimation = css`
  animation: ${bounceIn} 0.8s ease-out forwards;
`;

export const floatAnimation = css`
  animation: ${float} 3s ease-in-out infinite;
`;

export const pulseAnimation = css`
  animation: ${pulse} 2s ease-in-out infinite;
`;

// Staggered animation helper
export const staggeredFadeIn = (delay: number = 0) => css`
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: ${delay}s;
`;

// Interactive hover animations
export const hoverLift = css`
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${props => props.theme.shadows.heavy};
  }
`;

export const hoverGlow = css`
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 0 20px rgba(102, 126, 234, 0.4);
    transform: scale(1.02);
  }
`;

export const hoverRotate = css`
  transition: all 0.3s ease;
  
  &:hover {
    transform: rotate(5deg) scale(1.05);
  }
`;

// Scroll-triggered animation component
export const AnimatedContainer = styled.div<{ delay?: number; animation?: string }>`
  opacity: 0;
  ${props => {
    switch (props.animation) {
      case 'slideLeft':
        return slideInLeftAnimation;
      case 'slideRight':
        return slideInRightAnimation;
      case 'bounce':
        return bounceInAnimation;
      default:
        return fadeInAnimation;
    }
  }};
  animation-delay: ${props => props.delay || 0}s;
`;

// Loading spinner
export const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 3px solid ${props => props.theme.colors.light};
  border-top: 3px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin: 0 auto;
`;