import { alertarERedirecionar, atualizaTextoEditor } from "./documento.js";

const socket = io();

function selecionarDocumento(nomeDocumento){
    socket.emit("selecionar_documento", nomeDocumento, (texto)=>{
        atualizaTextoEditor(texto);
    })
}

function emitirTextoEditor(dados){
    socket.emit("texto_editor",dados);
}

socket.on("texto_documento",(texto)=>{
    atualizaTextoEditor(texto);
});

socket.on("texto_editor_clientes",(texto)=>{
    atualizaTextoEditor(texto);
})

function emitirExcluirDocumento(nome){
    socket.emit("excluir_documento",nome);
}

socket.on("excluir_documento_sucesso",(nome)=>{
    alertarERedirecionar(nome);
});

export {emitirTextoEditor, selecionarDocumento,emitirExcluirDocumento};