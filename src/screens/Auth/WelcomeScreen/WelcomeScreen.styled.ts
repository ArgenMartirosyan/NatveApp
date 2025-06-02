import styled from 'styled-components/native';
import {theme} from '../../../styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
  padding: ${theme.spacing.xl}px;
  justify-content: center;
`;

export const LogoContainer = styled.View`
  align-items: center;
  margin-bottom: ${theme.spacing.xxxl}px;
`;

export const AppLogo = styled.View`
  width: 100px;
  height: 100px;
  background-color: ${theme.colors.primary};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  margin-bottom: ${theme.spacing.lg}px;
`;

export const LogoText = styled.Text`
  font-size: 40px;
  color: ${theme.colors.text.inverse};
  font-weight: bold;
`;

export const AppName = styled.Text`
  font-size: ${theme.typography.h1.fontSize}px;
  font-weight: ${theme.typography.h1.fontWeight};
  color: ${theme.colors.text.primary};
  text-align: center;
`;

export const WelcomeText = styled.Text`
  font-size: ${theme.typography.h2.fontSize}px;
  font-weight: ${theme.typography.h2.fontWeight};
  color: ${theme.colors.text.primary};
  text-align: center;
  margin-bottom: ${theme.spacing.md}px;
`;

export const SubtitleText = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.text.secondary};
  text-align: center;
  margin-bottom: ${theme.spacing.xxxl}px;
  line-height: 24px;
`;

export const ButtonContainer = styled.View`
  gap: ${theme.spacing.md}px;
`;

export const FooterText = styled.Text`
  font-size: ${theme.typography.footnote.fontSize}px;
  color: ${theme.colors.text.secondary};
  text-align: center;
  margin-top: ${theme.spacing.xl}px;
`;
