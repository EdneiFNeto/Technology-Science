import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import {REACT_APP_API_KEY} from '@env';

import Background from '../../components/background';
import News from '../../components/News';

import {Container, Title, List, Spinner, Item} from './styles';
export default function Technology({navigation}) {
  const [news, setNews] = useState([]);
  const [visibility, setVisibility] = useState(true);

  useEffect(() => {
    async function loadAppointment() {
      const response = await api.get(
        `technology.json?api-key=${REACT_APP_API_KEY}`,
      );

      if (response.status === 200) {
        setNews(response.data.results);
        setVisibility(false);
      }
    }

    loadAppointment();
  }, []);

  return (
    <Background>
      <Container>
        <Title>Technology</Title>
        {visibility && <Spinner size="large" color="#FFF" />}

        <List
          data={news}
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
Technology.navigationOptions = {
  tabBarLabel: 'Technology',
  tabBarIcon: ({tintColor}) => (
    <Icon name="laptop" size={20} color={tintColor} />
  ),
};
