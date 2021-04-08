import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {REACT_APP_API_KEY} from '@env';
import api from '../../services/api';

import Background from '../../components/background';
import News from '../../components/News';

import {Container, Title, List, Spinner, Item} from './styles';

export default function Science({navigation}) {
  const [technology, setTechnology] = useState([]);
  const [visibility, setVisibility] = useState(true);

  useEffect(() => {
    async function loadAppointment() {
      const response = await api.get(
        `science.json?api-key=${REACT_APP_API_KEY}`,
      );

      if (response.status === 200) {
        setTechnology(response.data.results);
        setVisibility(false);
      }
    }

    loadAppointment();
  }, []);

  return (
    <Background>
      <Container>
        <Title>Science</Title>

        {visibility && <Spinner size="large" color="#FFF" />}

        <List
          data={technology}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => (
            <Item onPress={() => navigation.navigate('Description', {item})}>
              <News data={item} />
            </Item>
          )}
        />
      </Container>
    </Background>
  );
}

Science.navigationOptions = {
  tabBarLabel: 'Science',
  tabBarIcon: ({tintColor}) => (
    <Icon name="science" size={20} color={tintColor} />
  ),
};
