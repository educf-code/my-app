import React from 'react';
import logo from '../../imagens/logobuscabanda.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
{/* Estiliza o Logo */}
const LogoContainer = styled.div`
    justify-content: center;
    align-items:center;
    cursor: pointer;
`
{/* Função que mostra o logo */}
function Logo(){
   return(
    <LogoContainer>
        <Link to='/'><img src={logo} alt='BuscaBanda'></img></Link>
        
        

    </LogoContainer>
   ) 
}
export default Logo