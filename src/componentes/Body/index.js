import React from 'react';
import Logo from '../Logo'
import BarradePesquisa from '../Pesquisa'
import styled from 'styled-components'
{/* Estiliza o Body */}
const BodyContainer = styled.body`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content:center;
    column-gap: 10%;
    @media (max-width: 768px){
        justify-content: center;
        img{
            margin-top: 60%;
            width: 80vw
        }
        input{
            width: 95vw
        }
    }
    @media (min-width: 768px){
        margin-top: 12%;
    }
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