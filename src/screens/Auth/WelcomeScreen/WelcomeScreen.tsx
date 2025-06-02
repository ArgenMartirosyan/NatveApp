import React from 'react';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button} from '../../../components/common';
import {AuthStackParamList} from '../../../types';
import {
  Container,
  LogoContainer,
  AppLogo,
  LogoText,
  AppName,
  WelcomeText,
  SubtitleText,
  ButtonContainer,
  FooterText,
} from './WelcomeScreen.styled';

type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Welcome'
>;

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  const handleLogin = () => {
    console.log('first');
    navigation.navigate('Login');
  };

  const navState = useNavigationState(state => state);
  React.useEffect(() => {
    console.log('NAVIGATION STATE in WelcomeScreen', navState);
  }, [navState]);

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <Container>
      <LogoContainer>
        <AppLogo>
          <LogoText>💬</LogoText>
        </AppLogo>
        <AppName>ChatApp</AppName>
      </LogoContainer>

      <WelcomeText>Welcome!</WelcomeText>
      <SubtitleText>
        Connect with friends and family through secure, real-time messaging.
      </SubtitleText>

      <ButtonContainer>
        <Button
          title="Sign In"
          onPress={handleLogin}
          variant="primary"
          size="large"
          fullWidth
        />
        <Button
          title="Create Account"
          onPress={handleSignup}
          variant="outline"
          size="large"
          fullWidth
        />
      </ButtonContainer>

      <FooterText>
        By continuing, you agree to our Terms of Service and Privacy Policy.
      </FooterText>
    </Container>
  );
};

export default WelcomeScreen;
