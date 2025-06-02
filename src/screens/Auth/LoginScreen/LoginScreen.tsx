import React from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button} from '../../../components/common';
import {AuthStackParamList} from '../../../types';
import {
  Container,
  Header,
  BackButton,
  BackButtonText,
  Title,
  Subtitle,
  Content,
  Auth0Container,
  Auth0Description,
} from './LoginScreen.styled';
// import {useAuth} from '../../../hooks/auth/useAuth';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Login'
>;

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  // const {login, isLoading} = useAuth();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleAuth0Login = async () => {
    try {
      // await login();
      // Navigation will be handled automatically by AppNavigator based on auth state
    } catch (error) {
      Alert.alert('Login Error', 'Failed to login. Please try again.');
    }
  };

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack}>
          <BackButtonText>← Back</BackButtonText>
        </BackButton>
        <Title>Sign In</Title>
        <Subtitle>Welcome back! Please sign in to continue.</Subtitle>
      </Header>

      <Content>
        <Auth0Container>
          <Auth0Description>
            We use Auth0 for secure authentication. You can sign in with your
            email, Google, or other social providers.
          </Auth0Description>

          <Button
            title="Continue with Auth0"
            onPress={handleAuth0Login}
            variant="primary"
            size="large"
            fullWidth
            // loading={isLoading}
          />
        </Auth0Container>
      </Content>
    </Container>
  );
};

export default LoginScreen;
