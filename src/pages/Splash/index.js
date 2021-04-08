import React, {useEffect} from 'react';
import logo from '../../assets/logo.png';
import Background from '../../components/background';
import {Container, Title, Logo} from './styles';

export default function Splash({navigation}) {
  useEffect(() => {
    function navigationHandle() {
      setTimeout(() => {
        navigation.navigate('Technology');
      }, 3000);
    }

    navigationHandle();
  }, [navigation]);

  return (
    <Background>
      <Container>
        <Logo source={logo} />
        <Title>Technology & Science</Title>
      </Container>
    </Background>
  );
}
