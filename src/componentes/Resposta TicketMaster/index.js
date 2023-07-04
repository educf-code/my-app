import BarradePesquisa from "../Pesquisa";
import React from "react";
import { styled } from "styled-components";
{/* Estilizando o Container que contém as respostas */}
const ResultadoTicketMasterContainer = styled.div`
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

const ResultadoTicketMasterItens = styled.div`
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

function RespostaAPITicketMaster({ infos }) {
    return (
      <ResultadoTicketMasterContainer>
        {infos.attractions &&
          infos.attractions.map((info) => {
            if (
              info.externalLinks &&
              info.externalLinks.itunes &&
              info.externalLinks.itunes.length > 0
            ) {
              return (
                <ResultadoTicketMasterItens key={info.id}>
                  <p>{info.externalLinks.itunes[0].url}</p>
                  <p>{info.externalLinks.spotify[0].url}</p>
                  <p>{info.externalLinks.instagram[0].url}</p>
                  <p>{info.externalLinks.youtube[0].url}</p>
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