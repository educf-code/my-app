import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import Input from '../Input/index.js';
const PesquisaContainer = styled.div``
{/* Cria a Barra de Pesquisa */}
function BarradePesquisa( {setvideos, setinfos}){
    {/* Criando o Estado e setando como vazio */}
    const [termoPesquisado, settermoPesquisado] = useState('');
    const youtubeAPI = axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3/search/'
    })
    const ticketmasterAPI = axios.create({
        baseURL: 'https://app.ticketmaster.com/discovery/v2/attractions.json?'
    })

    {/* Fazendo as requisições */}
    async function fetchVideos() {
        if (termoPesquisado !== '') {
            try {
                const response = await youtubeAPI.get('/', {
                    params: {
                        q: termoPesquisado,
                        part: 'snippet',
                        key: 'AIzaSyAc6tZuU26anraevwZkMwVhU6Qm9YY7IHk'
                    }
                });
                setvideos(response.data.items);
                
            } catch (error) {
                console.error('Erro na requisição à API do YouTube:', error);
            }
        }
    }
    async function fetchInfo() {
        if (termoPesquisado !== '') {
            try {
                const response = await ticketmasterAPI.get('/', {
                    params: {
                        keyword: termoPesquisado,
                        apikey: 'x9TAS10ua31T7nONj8geuWe7Cnp7OixA'
                    }
                });
                setinfos(response.data._embedded);
                
            } catch (error) {
                console.error('Erro na requisição à API do TicketMaster:', error);
            }
        }
    }
    
    {/* Dando inicio às requisições somente após a pesquisa */}
    function teclaApertada(event){ 
        if(event.key === 'Enter'){
            if (termoPesquisado !== ''){
                fetchVideos();
                fetchInfo();
                
            }
        }

    
    }
   {/* Permite que mais de uma pesquisa seja feita */}
   useEffect(() => {
    if (window.location.pathname === '/') {
      fetchVideos();
      fetchInfo();
    }
  }, [window.location.pathname]);
    
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
