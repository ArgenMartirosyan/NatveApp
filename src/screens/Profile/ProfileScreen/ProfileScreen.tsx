import React from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button} from '../../../components/common';
import {MainStackParamList} from '../../../types';
import {
  Container,
  Header,
  HeaderTitle,
  BackButton,
  BackButtonText,
  ProfileCard,
  AvatarContainer,
  Avatar,
  AvatarPlaceholder,
  AvatarText,
  ProfileInfo,
  UserName,
  UserEmail,
  VerificationBadge,
  VerificationText,
  ButtonContainer,
} from './ProfileScreen.styled';
import {useAuth} from '../../../hooks/auth/useAuth';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'Profile'
>;

export const ProfileScreen: React.FC = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const {user, logout, isLoading} = useAuth();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleLogout = () => {
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Sign Out',
        style: 'destructive',
        onPress: logout,
      },
    ]);
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack}>
          <BackButtonText>← Back</BackButtonText>
        </BackButton>
        <HeaderTitle>Profile</HeaderTitle>
        <BackButton style={{opacity: 0}}>
          <BackButtonText>Back</BackButtonText>
        </BackButton>
      </Header>

      <ProfileCard>
        <AvatarContainer>
          {user?.picture ? (
            <Avatar source={{uri: user.picture}} />
          ) : (
            <AvatarPlaceholder>
              <AvatarText>{getInitials(user?.name || 'U')}</AvatarText>
            </AvatarPlaceholder>
          )}
        </AvatarContainer>

        <ProfileInfo>
          <UserName>{user?.name}</UserName>
          <UserEmail>{user?.email}</UserEmail>

          {user?.email_verified && (
            <VerificationBadge>
              <VerificationText>✓ Verified</VerificationText>
            </VerificationBadge>
          )}
        </ProfileInfo>
      </ProfileCard>

      <ButtonContainer>
        <Button
          title="Edit Profile"
          onPress={() =>
            Alert.alert(
              'Coming Soon',
              'Profile editing will be available soon!',
            )
          }
          variant="outline"
          size="large"
          fullWidth
        />

        <Button
          title="Settings"
          onPress={() =>
            Alert.alert('Coming Soon', 'Settings will be available soon!')
          }
          variant="ghost"
          size="large"
          fullWidth
        />

        <Button
          title="Sign Out"
          onPress={handleLogout}
          variant="outline"
          size="large"
          fullWidth
          loading={isLoading}
        />
      </ButtonContainer>
    </Container>
  );
};
