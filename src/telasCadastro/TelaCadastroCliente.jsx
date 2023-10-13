import { useState } from "react";
import Pagina from "../templates/Pagina";
import FormCadClientes from "./formularios/FormCadCliente";


import TabelaClientes from "./tabelas/TabelaClientes";
import TelaMensagem from "./TelaMensagem";
import { Container } from "react-bootstrap";

export default function TelaCadastroCliente(props) {
    const [exibirformulario, setExibirFormulario] = useState(true);
    //const [listaClientes, setListaClientes] = useState([]);
    const [mostrarMensagem, setMostrarMensagem] = useState(false);
    const [mensagem,setMensagem] = useState("");
    const [tipoMensagem,setTipoMensagem] = useState("");
    const [clienteParaEdicao, setClienteParaEdicao] = useState({
        cpf: '',
        nome: '',
        endereco: '',
        numero: '',
        bairro: '',
        cidade: '',
        UF: 'SP',
        cep: ''
    });
    const [modoEdicao, setModoEdicao] = useState(false);

    if (mostrarMensagem) {
        return <TelaMensagem mensagem={mensagem} tipo={tipoMensagem} setMostrarMensagem={setMostrarMensagem}/>
    }
    else {
        return (
            <>
                <Pagina>
                    {

                        //dinamica em que o usuario ira alternar entre o formulario e a visualização do registros ja cadastrados
                        exibirformulario ? <FormCadClientes exibirformulario={setExibirFormulario}
                            listaClientes={listaClientes}
                            setListaClientes={setListaClientes}
                            clienteParaEdicao={clienteParaEdicao}
                            setClienteParaEdicao={setClienteParaEdicao}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                            setMostrarMensagem={setMostrarMensagem}
                            setMensagem={setMensagem}
                            setTipoMensagem={setTipoMensagem} />
                            :
                            <TabelaClientes exibirformulario={setExibirFormulario}
                                listaClientes={listaClientes}
                                setListaClientes={setListaClientes}
                                clienteParaEdicao={clienteParaEdicao}
                                setClienteParaEdicao={setClienteParaEdicao}
                                modoEdicao={modoEdicao}
                                setModoEdicao={setModoEdicao} />
                    }
                </Pagina>
            </>
        )
    }
}