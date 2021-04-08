import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Section = styled.View`
  flex-direction: row;
  margin: 10px;
  align-self: flex-start;
`;

export const TextSection = styled.Text`
  font-size: 20px;
  margin: 5px 20px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #333;
  margin: 5px 0px;
  font-weight: bold;
`;

export const Info = styled.Text`
  font-size: 16px;
  color: #999;
  margin-top: 10px;
  text-align: justify;
`;
export const Card = styled.View`
  background: #fff;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
`;

export const ImageInfo = styled.Image`
  width: auto;
  height: 200px;
`;
