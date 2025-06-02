import styled from 'styled-components/native';
import { theme } from '../../../styles';

interface ButtonContainerProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size: 'small' | 'medium' | 'large';
  disabled?: boolean;
  fullWidth?: boolean;
}

const getBackgroundColor = (variant: string, disabled?: boolean) => {
  if (disabled) return theme.colors.text.tertiary;
  
  switch (variant) {
    case 'primary':
      return theme.colors.primary;
    case 'secondary':
      return theme.colors.secondary;
    case 'outline':
    case 'ghost':
      return 'transparent';
    default:
      return theme.colors.primary;
  }
};

const getBorderColor = (variant: string) => {
  switch (variant) {
    case 'outline':
      return theme.colors.primary;
    default:
      return 'transparent';
  }
};

const getPadding = (size: string) => {
  switch (size) {
    case 'small':
      return `${theme.spacing.sm}px ${theme.spacing.md}px`;
    case 'medium':
      return `${theme.spacing.md}px ${theme.spacing.lg}px`;
    case 'large':
      return `${theme.spacing.lg}px ${theme.spacing.xl}px`;
    default:
      return `${theme.spacing.md}px ${theme.spacing.lg}px`;
  }
};

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  background-color: ${({ variant, disabled }) => getBackgroundColor(variant, disabled)};
  border: 1px solid ${({ variant }) => getBorderColor(variant)};
  border-radius: ${theme.borderRadius.md}px;
  padding: ${({ size }) => getPadding(size)};
  align-items: center;
  justify-content: center;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  min-height: 44px;
`;

export const ButtonText = styled.Text<{ variant: 'primary' | 'secondary' | 'outline' | 'ghost' }>`
  color: ${({ variant }) => {
    switch (variant) {
      case 'outline':
      case 'ghost':
        return theme.colors.primary;
      default:
        return theme.colors.text.inverse;
    }
  }};
  font-size: ${theme.typography.body.fontSize}px;
  font-weight: 600;
  text-align: center;
`;