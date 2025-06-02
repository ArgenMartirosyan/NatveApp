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
  FeatureList,
  FeatureItem,
  FeatureIcon,
  FeatureText,
} from './SignupScreen.styled';
// import {useAuth} from '../../../hooks/auth/useAuth';

type SignupScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Signup'
>;
const SignupScreen: React.FC = () => {
  const navigation = useNavigation<SignupScreenNavigationProp>();
  // const {login, isLoading} = useAuth();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleAuth0Signup = async () => {
    try {
      // await login(); // Auth0 handles both login and signup
      // Navigation will be handled automatically by AppNavigator based on auth state
    } catch (error) {
      Alert.alert(
        'Signup Error',
        'Failed to create account. Please try again.',
      );
    }
  };

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack}>
          <BackButtonText>← Back</BackButtonText>
        </BackButton>
        <Title>Create Account</Title>
        <Subtitle>Join thousands of users already chatting!</Subtitle>
      </Header>

      <Content>
        <FeatureList>
          <FeatureItem>
            <FeatureIcon>🔒</FeatureIcon>
            <FeatureText>End-to-end encrypted messages</FeatureText>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon>☁️</FeatureIcon>
            <FeatureText>Sync across all your devices</FeatureText>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon>👥</FeatureIcon>
            <FeatureText>Group chats and direct messages</FeatureText>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon>📱</FeatureIcon>
            <FeatureText>Real-time notifications</FeatureText>
          </FeatureItem>
        </FeatureList>

        <Auth0Container>
          <Auth0Description>
            Create your account securely with Auth0. Choose from email, Google,
            or other social providers.
          </Auth0Description>

          <Button
            title="Get Started with Auth0"
            onPress={handleAuth0Signup}
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

export default SignupScreen;
