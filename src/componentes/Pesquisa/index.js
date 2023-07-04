import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import Input from '../Input/index.js';
{/* Cria a Barra de Pesquisa */}
function BarradePesquisa( {setvideos}){
    {/* Criando o Estado e setando como vazio */}
    const [termoPesquisado, settermoPesquisado] = useState('');
    const navigate = useNavigate();
    const youtubeAPI = axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3/search/'
    })

    {/* Fazendo a requisição */}
    async function fetchVideos() {
        if (termoPesquisado !== '') {
            try {
                const response = await youtubeAPI.get('/', {
                    params: {
                        q: termoPesquisado,
                        part: 'snippet',
                        key: 'AIzaSyCKkUjL9N-LNCWlFiWxSgV2W7oZqf33Nlc'
                    }
                });
                setvideos(response.data.items);
                
            } catch (error) {
                console.error('Erro na requisição à API do YouTube:', error);
            }
        }
    }
    {/* Dando inicio à requisição somente após a pesquisa */}
    function teclaApertada(event){ 
        if(event.key === 'Enter'){
            if (termoPesquisado !== ''){
                fetchVideos();
                navigate('/search');
            }
        }

    
    }
    
{/* Setando o termo pesquisado com o valor digitado */}
    return(
        <PesquisaContainer>
            <Input placeholder='Pesquisar'
            onChange={(evento) => 
                settermoPesquisado(evento.target.value)
            }
            onKeyDown={teclaApertada}/>

            
        </PesquisaContainer>
    )
}
export default BarradePesquisa
