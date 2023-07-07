import React, { useState } from 'react';
import Logo from '../Logo'
import BarradePesquisa from '../Pesquisa'
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
    margin-left: 4%;
`
{/* Cria o Header */}
function Header({setvideos, setinfos, videos}){ 
    {/* Deixando videos e infos como arrays vazios para ser possível limpar a tela dos resultados*/}
    const zeraVideos = () => {
        setvideos([])
        setinfos([])
    }
    {/* Como regra para estar na tela de resultados o array de videos tem que ser maior que zero */}
    const teladeResultados = videos.length > 0
    return(
    <HeaderContainer> {/* Tag com logo e searchbar */}
        <Logo zeraVideos = {zeraVideos} teladeResultados = {teladeResultados}/> {/* Uso das funções como tags */}
        <BarradePesquisa setvideos={setvideos} setinfos={setinfos}/>     
    </HeaderContainer>
    )
}
export default Header