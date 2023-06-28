import React from 'react';
import styled from 'styled-components'
import { useState } from 'react';
import { useSearchParams } from "react-router-dom";
{/* Estiliza a Caixa de Texto */}
const CaixadeTextoContainer = styled.input`
    float: right;
    padding: 6px;
    font-size: 17px;
    width: 800px;
    margin-top: 4%;
    border-radius: 50px;
    border: 3px solid rgb(79,144,253);

`
{/* Cria a Barra de Pesquisa */}
function BarradePesquisa(){
    {/* Criando o Estado e setando como vazio */}
    const [termoPesquisado, settermoPesquisado] = useState('') 
    return(
        <div className='BarradePesquisa'> {/* Barra de Pesquisa */}
            <CaixadeTextoContainer placeholder='Pesquisar'
            onKeyDown={evento => {if(evento.key === 'Enter') 
            {settermoPesquisado(evento.target.value)}}}/> {/* Setando o valor digitado */}
        </div>
    )
}
export default BarradePesquisa
