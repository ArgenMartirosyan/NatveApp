import React from 'react';
import {ActivityIndicator} from 'react-native';
import {theme} from '../../../styles';
import {Container, LoadingText} from './LoadingSpinner.stled';

interface LoadingSpinnerProps {
  text?: string;
  size?: 'small' | 'large';
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  text = 'Loading...',
  size = 'large',
}) => (
  <Container>
    <ActivityIndicator
      size={size === 'large' ? 'large' : 'small'}
      color={theme.colors.primary}
    />
    <LoadingText>{text}</LoadingText>
  </Container>
);
