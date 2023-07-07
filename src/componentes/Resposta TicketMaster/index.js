import BarradePesquisa from "../Pesquisa";
import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import logoyoutube from '../../imagens/logoyoutube.png'
import logospotify from '../../imagens/logospotify.png'
import logoinstagram from '../../imagens/logoinstagram.png'
import logoitunes from '../../imagens/logoitunes.png'

{/* Estilizando o Container que contém as respostas */}
const ResultadoTicketMasterContainer = styled.div`
    display: flex;    
    flex-direction: row;
    justify-content: center;
    column-gap: 3%;
    margin-top: 2%;
    margin-bottom: 2%;
    img{
        width: 100%
    }
`
{/* Estilizando o Container de cada resposta */}

const ResultadoTicketMasterItens = styled.div`
    display: flex;    
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 8%;
    column-gap: 10%;
    margin-top: 2%;
    border: 0.15vw solid rgb(79,144,253);
    border-radius: 2vw;
    padding: 0.55vw;
    width: 25%

`
{/* Passando pelo array de respostas e obtendo cada item */}

function RespostaAPITicketMaster({ infos }) {
    return (
      <ResultadoTicketMasterContainer>
        {infos.attractions &&
          infos.attractions.map((info) => {
            if (
              info.externalLinks &&
              info.externalLinks.itunes &&
              info.externalLinks.spotify &&
              info.externalLinks.instagram &&
              info.externalLinks.youtube &&
              info.externalLinks.itunes.length > 0 &&
              info.externalLinks.spotify.length > 0 &&
              info.externalLinks.instagram.length > 0 &&
              info.externalLinks.youtube.length > 0
            ) {
              return (
                <ResultadoTicketMasterItens key={info.id}>
                    <Link to={info.externalLinks.itunes[0].url}><img src={logoitunes}/></Link>
                    <Link to={info.externalLinks.spotify[0].url}><img src={logospotify}/></Link>
                    <Link to={info.externalLinks.instagram[0].url}><img src={logoinstagram}/></Link>
                    <Link to={info.externalLinks.youtube[0].url}><img src={logoyoutube}/></Link>
                </ResultadoTicketMasterItens>
              );
            } else {
              return null; 
            }
        })}
      </ResultadoTicketMasterContainer>
    );
  }
export default RespostaAPITicketMaster