import './estilo.css'
{/* Cria a Barra de Pesquisa */}
function BarradePesquisa(){
    return(
        <div className='BarradePesquisa'> {/* Barra de Pesquisa */}
            <input type='text' placeholder='Pesquisar' className='CaixadeTexto'></input>
        </div>
    )
}
export default BarradePesquisa
