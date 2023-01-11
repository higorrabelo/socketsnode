import { MongoClient } from 'mongodb';

const conn = "mongodb+srv://Higor:Higor120783@cluster0.psui0rs.mongodb.net/websockets"

const cliente = new MongoClient(conn);

let documentosColecao;

try{
    await cliente.connect();
    const db = cliente.db("websockets");
    documentosColecao = db.collection("documentos");
    console.log("Conectado ao bancodedados com sucesso");
}
catch(erro){
    console.log(erro)
}

export { documentosColecao }  ;
