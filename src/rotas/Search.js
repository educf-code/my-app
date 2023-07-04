import React, { useState } from 'react';
import Body from '../componentes/Body';
import styled from 'styled-components'
import Header from '../componentes/Header';
import RespostaAPIYoutube from '../componentes/Resposta';

const AppContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
function Search() {
  {/* Setando estado para utilizar a props de resposta da API do Youtube */}
  const [videos, setvideos]= useState([])
  return (
    <AppContainer>
      <Header setvideos={setvideos}/>
      <RespostaAPIYoutube videos={videos}/>
    </AppContainer>
  );
}

export default Search
