import React, { useEffect } from 'react';
import Body from '../componentes/Body';
import styled from 'styled-components';
import { useState } from 'react';
import RespostaAPITicketMaster from '../componentes/Resposta TicketMaster';
import RespostaAPIYoutube from '../componentes/Resposta Youtube';
import Header from '../componentes/Header';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px){
    height: 100vh;
  }
  @media (min-width: 768px){
    height: 140vh;

  }
`
function Home() {
  const [videos, setvideos]= useState([])
  const [infos, setinfos]= useState([])
  const [mostraHeader, setmostraHeader] = useState(false)
  {/* Se o array de videos for maior que 0, ficará exposto o header junto com os resutados. Caso contrário, ficará somente o body */}
  useEffect(() => {
    if (videos.length > 0){
      setmostraHeader(true)
    } else{
      setmostraHeader(false)
    }
  }, [videos])
  return (
    <AppContainer>
      {mostraHeader ?(
        <Header setvideos={setvideos} setinfos={setinfos} videos = {videos}/>
      ) : (
        <Body setvideos={setvideos} setinfos={setinfos}/>
      )}
      <RespostaAPIYoutube videos={videos}/>
      <RespostaAPITicketMaster infos={infos}/>
    </AppContainer>
  );
}

export default Home
