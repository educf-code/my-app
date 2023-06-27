import './estilo.css'
import Logo from '../Logo'
import BarradePesquisa from '../BarradePesquisa'
function Body(){
    return(
        <body className='App-body'> {/* Tag com logo e searchbar */}
        <Logo/> {/* Uso das funções como tags */}
        <BarradePesquisa/>
      </body>
    )
}
export default Body