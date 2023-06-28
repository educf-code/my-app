import React from 'react';
import Body from '../componentes/Body';
import styled from 'styled-components'
import Header from '../componentes/Header';

const AppContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
`
function Search() {
  return (
    <AppContainer>
      <Header/>
    </AppContainer>
  );
}

export default Search
