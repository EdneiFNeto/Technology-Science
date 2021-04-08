import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const Spinner = styled.ActivityIndicator.attrs({})`
  flex: 2;
  flex-direction: row;
  justify-content: space-around;
`;

export const Item = styled(RectButton)`
  background: #fff;
  height: 90px;
  margin: 5px;
  border-radius: 12px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 10},
})``;
