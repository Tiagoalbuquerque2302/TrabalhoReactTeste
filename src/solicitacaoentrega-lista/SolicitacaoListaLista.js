import React from "react";
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';

import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow
} from 'material-ui/Table';


export default class SolicitacaoListaLista extends React.Component {

    setPagina(numero) {
        this.props.mudaPagina(numero);
    }

    botoesPagina() {
        let botoes = [<button>&lt;&lt;</button>, <button>&lt;</button>];
        for (let x = 0; x < this.props.pagina.totalPages; x++) {
            let botao = <button 
                onClick={(evento) => {
                                this.setPagina(x);
            }}
                disabled={x == this.props.pagina.number}>{x + 1}</button>;
                botoes.push(botao);
        }
        return botoes;
    }

    botoesSolicitacao(solicitacao) {
        let botoes = [];
        if (this.props.editar) {
            let botao = <IconButton onClick={(evento) => {
                                this.props.editar(solicitacao);
            }} style={{color: '#009688'}}>
        <Icon>create</Icon>
      </IconButton>
                            /*
                            <button onClick={(evento) => {
                                this.props.editar(solicitacao);
            }}>
                Editar</button>;*/;
                botoes.push(botao);
        }

        if (this.props.apagar) {
            let botao = 
                    <IconButton onClick={(evento) => {
                                this.props.apagar(solicitacao);
            }} style={{color: '#616161'}}>
        <Icon>delete</Icon>
      </IconButton>;
                    /*            
                                
                                <button onClick={(evento) => {
                                this.props.apagar(solicitacao);
            }}>
                Apagar</button>;*/
                botoes.push(botao);
        }
        return botoes;
    }

    render() {

        if (!this.props.pagina.content) {
            return <div>Vazio!</div>;
        } else {

            return <Table >
    <TableHead>
        <TableRow>
            <TableCell>Endereco Entrega</TableCell><TableCell>Custo</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {this.props.pagina.content.map((solicitacao) => {
                                return <TableRow hover="true" key={solicitacao.id}>
                            <TableCell>{solicitacao.enderecousuario}</TableCell>                     
                            <TableCell>{solicitacao.custo}</TableCell>              
                            <TableCell>
                                {this.botoesSolicitacao(solicitacao)}</TableCell>
                        </TableRow>;
        })}        
    </TableBody>
    <TableFooter>
        <TableRow>
        <TablePagination
                  count={this.props.pagina.totalElements}
                  rowsPerPage={this.props.pagina.size}
                  page={this.props.pagina.number}
                  onChangePage={(evento,pagina)=>{this.setPagina(pagina);}}
                  onChangeRowsPerPage={()=>{}}
                  rowsPerPageOptions={[this.props.pagina.size]}
                  labelRowsPerPage=""
                />
        </TableRow>                        
    </TableFooter>
</Table>;
        }
    }
}