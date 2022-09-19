import { Cliente } from "../cliente/cliente.model"


export interface OrdemServico{
    id?:String,
    data_entrada:String,
    data_saida:String,
    inscricao_estadual:String,
    fk_cliente_id:String,
    fk_funcionario_id:String
    
}
