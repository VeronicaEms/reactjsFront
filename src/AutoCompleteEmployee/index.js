import React , { Component, Fragment } from 'react';

import Autocomplete from "./AutoComplete.js";

export default class AutoCompleteEmployee extends Component {
    state = {
        autocompleteEmployee : [], // Aqui vai o array filtrado
    }

    /*  static defaultProps = {
        listEmployee: []
    };  */

    componentDidMount() {
        const { listEmployee } = this.props; // Aqui estou pegando a lista que veio através da prop listEmployee lá do Home.js
        const list = listEmployee.map(element => {
            return element.NOME;
        }); //Essa é a lista já filtrada em um único elemento.

        //Aqui alterei o estado do nosso componente com as sugestões

        //this.setState(state => ({...state, autocompleteEmployee: list})); 
        this.setState({autocompleteEmployee: list});
    }

    render() {
        const { autocompleteEmployee } = this.state;

        return (
            <Fragment>
                {
                    //Aqui estamos pegando as sugestões do nosso estado e repassando ao componente  de autocomplete
                }
                <Autocomplete suggestions={autocompleteEmployee} />
            </Fragment>
        )
    }
}
