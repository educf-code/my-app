import './App.css';
import BarradePesquisa from './componentes/Barra de pesquisa';
import Logo from './componentes/Logo'
function App() {
  return (
    <div className='App'>
      <header>

      </header>
      <body className='App-body'> {/* Tag com logo e searchbar */}
        <Logo></Logo> {/* Uso das funções como tags */}
        <BarradePesquisa></BarradePesquisa>
      </body>
    </div>
  );
}

export default App
