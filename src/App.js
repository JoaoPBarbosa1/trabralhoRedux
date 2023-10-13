import TelaCadastroCliente from "./telasCadastro/TelaCadastroCliente";
import TelaCadastroProduto from "./telasCadastro/TelaCadastroProduto";
import TelaCadastroCategorias from "./telasCadastro/TelaCadastroCategorias";
import TelaCadastroFornecedor from "./telasCadastro/TelaCadastroFornecedor"

import TelaMenu from "./telasCadastro/TelaMenu";
import Tela404 from "./telasCadastro/Tela404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {
              //os caminhos devem (path) ser devem ser organizados do mais especifico para o mais geral
            }
            <Route path="/clientes" element={<TelaCadastroCliente/>} />
            <Route path="/produtos" element={<TelaCadastroProduto/>}/>
            <Route path="/categorias" element={<TelaCadastroCategorias/>}/>
            <Route path="/fornecedor" element={<TelaCadastroFornecedor/>}/>

            <Route path="/" element={<TelaMenu/>}/>
            <Route path="*" element={<Tela404/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
