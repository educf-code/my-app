import React from 'react';
import Logo from '../Logo'
import BarradePesquisa from '../BarradePesquisa'
import styled from 'styled-components'


{/* Estiliza o Header que será usado na pesquisa */}
const HeaderContainer = styled.header`
    display: flex;    
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    align-content:center;
    column-gap: 3%;
    margin-top: 2%;
`
{/* Cria o Header */}
function Header(){ 
    return(
    <HeaderContainer> {/* Tag com logo e searchbar */}
        <Logo/> {/* Uso das funções como tags */}
        <BarradePesquisa/>
        
    </HeaderContainer>
    )
}
export default Header