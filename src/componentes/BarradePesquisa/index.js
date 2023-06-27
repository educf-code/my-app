import React from 'react';
import styled from 'styled-components'
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
    return(
        <div className='BarradePesquisa'> {/* Barra de Pesquisa */}
            <CaixadeTextoContainer placeholder='Pesquisar'/>
        </div>
    )
}
export default BarradePesquisa
