import logo from '../../imagens/logobuscabanda.png'
import './estilo.css'
{/* Função que mostra o logo */}

function Logo(){
   return(
    <div className ='logo'>  {/* Logo */}
        <img src={logo} alt='BuscaBanda'></img>

    </div>
   ) 
}
export default Logo