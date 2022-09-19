import { Endereco } from "../endereco/endereco.model";

export interface Cliente{
    id?: String,
    nome: String,
    cnpjCpf: String,
    rg:String,
    tipoCliente:String,
    email:String,
    telefone:String,
    id_endereco:String,
    dataEntrada:String,
    dataSaida:String,
    celular:String
}