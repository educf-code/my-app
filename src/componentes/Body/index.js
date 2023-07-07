import React from 'react';
import Logo from '../Logo'
import BarradePesquisa from '../Pesquisa'
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
function Body({setvideos, setinfos}){ 
    return(
    <BodyContainer> {/* Tag com logo e searchbar */}
        <Logo/> {/* Uso das funções como tags */}
        <BarradePesquisa setvideos={setvideos} setinfos={setinfos}/>
    </BodyContainer>
    )
}
export default Body