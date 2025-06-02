import styled from 'styled-components/native';
import { theme } from '../../../styles';

export const Container = styled.ScrollView`
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

export const BackButton = styled.TouchableOpacity`
  padding: ${theme.spacing.sm}px;
`;

export const BackButtonText = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.primary};
`;

export const ProfileCard = styled.View`
  background-color: ${theme.colors.surface};
  margin: ${theme.spacing.lg}px;
  border-radius: ${theme.borderRadius.lg}px;
  padding: ${theme.spacing.lg}px;
  align-items: center;
  ${theme.shadows.sm};
`;

export const AvatarContainer = styled.View`
  margin-bottom: ${theme.spacing.lg}px;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: ${theme.colors.text.tertiary};
`;

export const AvatarPlaceholder = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: ${theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

export const AvatarText = styled.Text`
  font-size: 40px;
  color: ${theme.colors.text.inverse};
  font-weight: bold;
`;

export const ProfileInfo = styled.View`
  width: 100%;
  margin-bottom: ${theme.spacing.lg}px;
`;

export const UserName = styled.Text`
  font-size: ${theme.typography.h2.fontSize}px;
  font-weight: ${theme.typography.h2.fontWeight};
  color: ${theme.colors.text.primary};
  text-align: center;
  margin-bottom: ${theme.spacing.sm}px;
`;

export const UserEmail = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.text.secondary};
  text-align: center;
  margin-bottom: ${theme.spacing.md}px;
`;

export const VerificationBadge = styled.View`
  background-color: ${theme.colors.success};
  padding: ${theme.spacing.xs}px ${theme.spacing.sm}px;
  border-radius: ${theme.borderRadius.sm}px;
  align-self: center;
  margin-bottom: ${theme.spacing.lg}px;
`;

export const VerificationText = styled.Text`
  font-size: ${theme.typography.caption.fontSize}px;
  color: ${theme.colors.text.inverse};
  font-weight: 600;
`;

export const ButtonContainer = styled.View`
  margin: ${theme.spacing.lg}px;
  gap: ${theme.spacing.md}px;
`;