import React from 'react';
import logo from '../../imagens/logobuscabanda.png'
import styled from 'styled-components'
{/* Estiliza o Logo */}
const LogoContainer = styled.div`
    justify-content: center;
    align-items:center;
`
{/* Função que mostra o logo */}
function Logo(){
   return(
    <LogoContainer>
        <img src={logo} alt='BuscaBanda'></img>

    </LogoContainer>
   ) 
}
export default Logo