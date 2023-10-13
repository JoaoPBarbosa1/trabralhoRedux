import {creatSlice} from '@reduxjs/toolkit';
import ESTADO from '../recursos/estado';
import { act } from 'react-dom/test-utils';

//name, initialState e reducer são atributos obrigatórios
//de um objeto que cria uma 'fatia/slice da store, resultando em um redutor
const clienteSlice = creatSlice({
    name:'cliente',
    initialState:{
        status: ESTADO.OCIOSO,
        mensagem:'',
        listaClientes:[]
    },
    reducers:{
        //ação ou action adicionar
        adicionar:(state)=>{
            state.listaClientes.push(action.payload);
        },
        remover:(state,action)=>{
            state.listaClientes = state.listaClientes.filter(cliente => cliente.cpf !== action.payload.cliente.cpf);
        },
        atualizar:(state,action)=>{
            //atualizar implicará em excluir o cliente da lista e adidioná-lo novamente com seus dados atualizados
            //remover -> adicionar novamente com dados atualizados
            const listaTemporariaClientes = state.listaClientes.filter(cliente => cliente.cpf !== action.payload.cliente.cpf);
            state.listaClientes = [...listaTemporariaClientes,action.payload.cliente];
        },
    }
})
//exportando as actions que alteram o estado 'cliente'
export const {adicionar,remover,atualizar} = clienteSlice.actions;
//exportando o redutor para ser utilizado na store
export default clienteSlice.reducers;