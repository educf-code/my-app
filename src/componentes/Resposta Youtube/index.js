import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import he from 'he'
{/* Estilizando o Container que contém as respostas */}
const ResultadoYoutubeContainer = styled.div`
    display: flex;    
    align-items: stretch;
    align-content:center;
    column-gap: 3%;
    margin-top: 5%;
    height: fit-content;
    width: fit-content;
    margin-left: 3%;
    text-decoration: none;
`
{/* Estilizando o Container de cada resposta */}

const ResultadoYoutubeItens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    column-gap: 3%;
    margin-top: 2%;
    height: 100vh;
    border-radius: 2vw;
    border: 0.7vw solid rgb(79,144,253);
    padding: 0.7vw;
    font-family: 'Belanosima';
    color: rgb(107,107,107);
    font-style: normal;
    text-decoration: none;
    justify-content: space-between;
    


    h2{
        align-self: center;
        height: 6.2vw;
        font-weight: bolder;
        text-decoration: none;
        
    }
    h3{
        align-self: center;
        height: 6.7vw;
        font-weight: normal;
        text-decoration: none;
    }
    p{
        align-self: center;
        font-weight: lighter; 
    }
    img{
        margin-bottom: 20%;
        max-height: 12vw;
        text-decoration: none;
        max-width: 100%;

    
    }
`
function RespostaAPIYoutube({ videos }) {
    return (
      <ResultadoYoutubeContainer>
        {/* Passando pelo array de respostas e obtendo cada item */}
        {videos.map((video) => {
        {/* Decodificando os caracteres HTML */}
          const Título = he.decode(video.snippet.title);
          const Descrição = he.decode(video.snippet.description);
          const Canal = he.decode(video.snippet.channelTitle);
  
          return (
            <Link to={`https://www.youtube.com/watch?v=${video.id.videoId}`} className='link' key={video.id.videoId}>
              <ResultadoYoutubeItens>
                <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
                <h2>{Título}</h2>
                <h3>{Descrição}</h3>
                <p>{Canal}</p>
              </ResultadoYoutubeItens>
            </Link>
          );
        })}
              </ResultadoYoutubeContainer>
    );
  }
  
  export default RespostaAPIYoutube;