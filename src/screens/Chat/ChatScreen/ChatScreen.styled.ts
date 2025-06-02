import styled from 'styled-components/native';
import { theme } from '../../../styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const Header = styled.View`
  background-color: ${theme.colors.surface};
  padding: ${theme.spacing.lg}px;
  padding-top: ${theme.spacing.xxxl}px;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.border};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-size: ${theme.typography.title.fontSize}px;
  font-weight: ${theme.typography.title.fontWeight};
  color: ${theme.colors.text.primary};
`;

export const HeaderButton = styled.TouchableOpacity`
  padding: ${theme.spacing.sm}px;
`;

export const HeaderButtonText = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.primary};
  font-weight: 600;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing.xl}px;
`;

export const PlaceholderText = styled.Text`
  font-size: ${theme.typography.title.fontSize}px;
  color: ${theme.colors.text.primary};
  text-align: center;
  margin-bottom: ${theme.spacing.md}px;
`;

export const SubText = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.text.secondary};
  text-align: center;
  line-height: 24px;
`;
