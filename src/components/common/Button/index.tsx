import React from 'react';
import {ActivityIndicator} from 'react-native';
import {ButtonProps} from './Button.types';
import {theme} from '../../../styles';
import {ButtonContainer, ButtonText} from './Button.styled';

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  fullWidth = false,
  style,
}) => {
  const getIndicatorColor = () => {
    if (variant === 'outline' || variant === 'ghost') {
      return theme.colors.primary;
    }
    return theme.colors.text.inverse;
  };

  console.log('props', onPress, title);

  return (
    <ButtonContainer
      variant={variant}
      size={size}
      disabled={disabled || loading}
      fullWidth={fullWidth}
      onPress={onPress}
      activeOpacity={0.8}
      style={style}>
      {loading ? (
        <ActivityIndicator color={getIndicatorColor()} />
      ) : (
        <ButtonText variant={variant}>{title}</ButtonText>
      )}
    </ButtonContainer>
  );
};
