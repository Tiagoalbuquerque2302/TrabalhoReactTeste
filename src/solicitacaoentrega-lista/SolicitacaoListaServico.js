/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import ServicoRest from "../ServicoRest";

export default class SolicitacaoListaServico extends  ServicoRest {
        constructor(){
            super("/api/solicitacao");
        }
        
}