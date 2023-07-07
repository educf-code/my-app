import React from 'react';
import logo from '../../imagens/logobuscabanda.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
{/* Estiliza o Logo */}
const LogoContainer = styled.div`
    justify-content: center;
    align-items:center;
    cursor: pointer;
    img{
        width: 31vw
    }
`
{/* Função que mostra o logo */}
function Logo({zeraVideos, teladeResultados}){
    {/* Limpa a tela dos resultados ao clicar na logo ("volta para a página inicial") */}
    const limpaTela = () => {
        if (teladeResultados){
            zeraVideos()
        }
    }
   return(
    <LogoContainer onClick={limpaTela}>
        <img src={logo} alt="BuscaBanda"/>
        
        

    </LogoContainer>
   ) 
}
export default Logo