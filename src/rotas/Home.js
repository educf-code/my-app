import React from 'react';
import Body from '../componentes/Body';
import styled from 'styled-components'

const AppContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
`
function Home() {
  return (
    <AppContainer>
      <Body/>
    </AppContainer>
  );
}

export default Home