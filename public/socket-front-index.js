import { inserirLinkDocumento, removerLinkDocumento } from "./index.js";

const socket = io();

socket.emit("obter_documentos", (documentos)=>{
    documentos.forEach((documento)=>{
        inserirLinkDocumento(documento.nome);
    })
});

function emitirAdicionarDocumento(nome){
    socket.emit("adicionar_documento", nome);
}

socket.on("adicionar_documento_interface",(nome)=>{
    inserirLinkDocumento(nome);
})

socket.on("documento_existente",(nome)=>{
    alert(`O Documento ${nome} já Existe`);
});

socket.on("excluir-documento-sucesso",(nome)=>{
    removerLinkDocumento(nome);
});

export { emitirAdicionarDocumento };