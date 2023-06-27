import React from 'react';
import Logo from '../Logo'
import BarradePesquisa from '../BarradePesquisa'
import styled from 'styled-components'
{/* Estiliza o Body */}
const BodyContainer = styled.body`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-content:center;
    column-gap: 10%;
    margin-top: 12%;
`
{/* Cria o Body */}
function Body(){ 
    return(
    <BodyContainer> {/* Tag com logo e searchbar */}
        <Logo/> {/* Uso das funções como tags */}
        <BarradePesquisa/>
    </BodyContainer>
    )
}
export default Body