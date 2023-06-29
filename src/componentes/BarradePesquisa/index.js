import React from 'react';
import styled from 'styled-components'
import { useState } from 'react';
import getVideos from '../../busca/index.js';
import { useNavigate } from 'react-router-dom';

{/* Estiliza a Caixa de Texto da Home */}
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
    const [termoPesquisado, settermoPesquisado] = useState('');
    const navigate = useNavigate();
    {/* Ao ser apertado o enter, passa para a rota de busca e define o valor digitado */}
    function pesquisaVideo(evento){
        if(evento.key === 'Enter'){
            settermoPesquisado(evento.target.value);
            const videos = getVideos(termoPesquisado);
            navigate('/search')
        }
    } 
    return(
        <div className='BarradePesquisa'> {/* Barra de Pesquisa */}
            <CaixadeTextoContainer placeholder='Pesquisar'
            onKeyDown={pesquisaVideo}/> 
        </div>
    )
}
export default BarradePesquisa
