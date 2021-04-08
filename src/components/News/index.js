import React from 'react';

import {Container, Left, Avatar, Info, Name, Descricao} from './styles';

export default function News({data}) {
  return (
    <Container>
      <Left>
        {data.multimedia.length > 0 && (
          <Avatar
            source={{
              uri: data.multimedia[0].url,
            }}
          />
        )}

        <Info>
          <Name>{data.section}</Name>
          <Descricao>{data.abstract}</Descricao>
        </Info>
      </Left>
    </Container>
  );
}
