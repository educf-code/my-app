import BarradePesquisa from "../Pesquisa";
import React from "react";
import { styled } from "styled-components";
{/* Estilizando o Container que contém as respostas */}
const ResultadoYoutubeContainer = styled.div`
    display: flex;    
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
    align-content:center;
    column-gap: 3%;
    margin-top: 2%;
    height: 100vh;
    width: 75vw;
`
{/* Estilizando o Container de cada resposta */}

const ResultadoYoutubeItens = styled.div`
    display: flex;    
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    align-content:center;
    column-gap: 3%;
    margin-top: 2%;
    height: 100vh;
    width: 75vw;
    h2{
        margin-bottom: 20%;
    }
    h3{
        margin-bottom: 20%
    }
    p{
        margin-bottom: 20%
    }
    img{
        margin-bottom: 20%
    
    }
`
{/* Passando pelo array de respostas e obtendo cada item */}

function RespostaAPIYoutube({videos}){
    return(
        <ResultadoYoutubeContainer >
            {videos.map((video) => (

            <ResultadoYoutubeItens>
                <h2  key={video.id.videoId}>{video.snippet.title}</h2>
                <h3  key={video.id.videoId}>{video.snippet.description}</h3>
                <p  key={video.id.videoId}>{video.snippet.channelTitle}</p>
                <img key={video.id.videoId} src={video.snippet.thumbnails.medium.url}/>
            </ResultadoYoutubeItens>  
            ))}
        </ResultadoYoutubeContainer>
    )
        
        
}
export default RespostaAPIYoutube