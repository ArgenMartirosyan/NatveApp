import React from 'react';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../../types';
import {
  Container,
  Header,
  HeaderTitle,
  HeaderButton,
  HeaderButtonText,
  Content,
  PlaceholderText,
  SubText,
} from './ChatScreen.styled';
import {useAuth} from '../../../hooks/auth/useAuth';

type ChatScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'Chat'
>;

export const ChatScreen: React.FC = () => {
  const navigation = useNavigation<ChatScreenNavigationProp>();
  const {user} = useAuth();

  const handleProfilePress = () => {
    navigation.navigate('Profile');
  };
  const navState = useNavigationState(state => state);
  React.useEffect(() => {
    console.log('NAVIGATION STATE in WelcomeScreen', navState);
  }, [navState]);
  return (
    <Container>
      <Header>
        <HeaderTitle>Chat</HeaderTitle>
        <HeaderButton onPress={handleProfilePress}>
          <HeaderButtonText>Profile</HeaderButtonText>
        </HeaderButton>
      </Header>

      <Content>
        <PlaceholderText>Welcome, {user?.name}! 👋</PlaceholderText>
        <SubText>
          Your chat implementation will go here. Auth0 is successfully
          integrated and you're now authenticated!
        </SubText>
      </Content>
    </Container>
  );
};
