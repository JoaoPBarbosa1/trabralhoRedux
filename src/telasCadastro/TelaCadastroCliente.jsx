import { useState } from "react";
import Pagina from "../templates/Pagina";
import FormCadClientes from "./formularios/FormCadCliente";


import TabelaClientes from "./tabelas/TabelaClientes";


export default function TelaCadastroCliente(props) {
    const [exibirformulario, setExibirFormulario] = useState(false);
    return (

        <Pagina>
            {

                //dinamica em que o usuario ira alternar entre o formulario e a visualização do registros ja cadastrados
                exibirformulario ? <FormCadClientes exibirformulario={setExibirFormulario}/> : <TabelaClientes exibirformulario={setExibirFormulario}/>
            }
        </Pagina>
    )
}