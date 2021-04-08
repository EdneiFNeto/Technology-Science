import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../components/background';

import {
  Container,
  Title,
  Info,
  Card,
  ImageInfo,
  Section,
  TextSection,
} from './styles';

export default function Description({navigation}) {
  const [data, setData] = useState();
  useEffect(() => {
    function handleSetData() {
      setData(navigation.getParam('item'));
    }

    handleSetData();
  }, [navigation, data]);

  return (
    <Background>
      <Container>
        {data !== undefined && (
          <>
            <Section>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" size={32} color="#FFF" />
              </TouchableOpacity>
              <TextSection>{data.section}</TextSection>
            </Section>
            <Card>
              <>
                <ImageInfo source={{uri: data.multimedia[0].url}} />
                <Title>{data.title}</Title>
                <Info>{data.abstract}</Info>
              </>
            </Card>
          </>
        )}
      </Container>
    </Background>
  );
}

Description.navigationOptions = {
  title: 'Description',
  headerLeft: () => {
    <TouchableOpacity>
      <Icon name="add" size={32} color="#FFF" />
    </TouchableOpacity>;
  },
};
