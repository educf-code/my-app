import BarradePesquisa from "../Pesquisa";
import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
{/* Estilizando o Container que contém as respostas */}
const ResultadoYoutubeContainer = styled.div`
    display: flex;    
    align-items: stretch;
    align-content:center;
    column-gap: 3%;
    margin-top: 2%;
    height: fit-content;
    width: fit-content;
    margin-left: 8%;
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
    border-radius: 30px;
    border: 10px solid rgb(79,144,253);
    padding: 10px;
    font-family: 'Belanosima';
    color: rgb(107,107,107);
    font-style: normal;
    text-decoration: none;
    justify-content: space-between;
    


    h2{
        align-self: center;
        height: 96px;
        font-weight: bolder;
        text-decoration: none;
        
    }
    h3{
        align-self: center;
        height: 100px;
        font-weight: normal;
        text-decoration: none;
    }
    p{
        align-self: center;
        font-weight: lighter; 
    }
    img{
        margin-bottom: 20%;
        max-height: 180px;
        text-decoration: none;
        max-width: 100%;

    
    }
`


{/* Passando pelo array de respostas e obtendo cada item */}

function RespostaAPIYoutube({videos}){
    return(
        <ResultadoYoutubeContainer >
            {videos.map((video) => (

            <Link to={`https://www.youtube.com/watch?v=${video.id.videoId}}`} className ='link'><ResultadoYoutubeItens key={video.id.videoId}>
               
                
                <img  src={video.snippet.thumbnails.medium.url}/>
                <h2>{video.snippet.title}</h2>
                <h3>{video.snippet.description}</h3>
                <p>{video.snippet.channelTitle}</p>
                
            </ResultadoYoutubeItens></Link>  
            ))}
        </ResultadoYoutubeContainer>
    )
        
        
}
export default RespostaAPIYoutube