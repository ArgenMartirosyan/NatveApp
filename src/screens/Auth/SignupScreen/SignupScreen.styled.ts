import styled from 'styled-components/native';
import { theme } from '../../../styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
  padding: ${theme.spacing.xl}px;
`;

export const Header = styled.View`
  margin-top: ${theme.spacing.xxxl}px;
  margin-bottom: ${theme.spacing.xxxl}px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-bottom: ${theme.spacing.xl}px;
  padding: ${theme.spacing.sm}px;
  align-self: flex-start;
`;

export const BackButtonText = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.primary};
`;

export const Title = styled.Text`
  font-size: ${theme.typography.h1.fontSize}px;
  font-weight: ${theme.typography.h1.fontWeight};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm}px;
`;

export const Subtitle = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.text.secondary};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Auth0Container = styled.View`
  align-items: center;
  margin-bottom: ${theme.spacing.xl}px;
`;

export const Auth0Description = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.text.secondary};
  text-align: center;
  margin-bottom: ${theme.spacing.lg}px;
  line-height: 24px;
`;

export const FeatureList = styled.View`
  margin-bottom: ${theme.spacing.lg}px;
`;

export const FeatureItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${theme.spacing.sm}px;
`;

export const FeatureIcon = styled.Text`
  font-size: 16px;
  margin-right: ${theme.spacing.sm}px;
`;

export const FeatureText = styled.Text`
  font-size: ${theme.typography.footnote.fontSize}px;
  color: ${theme.colors.text.secondary};
`;