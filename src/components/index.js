import React, { Component, Fragment } from "react";

import Autocomplete from "./AutoComplete.js";

export default class AutoCompleteEmployee extends Component {
  state = {
    autocompleteEmployee: [] // Aqui vai o array filtrado
  };

  static defaultProps = {
    listEmployee: []
  };

  componentDidMount() {
    const { listEmployee } = this.props;  // Aqui estou pegando a lista que veio através da prop listEmployee lá do Home.js
    const autocompleteEmployee = listEmployee.map(element => {
      return element.NOME;
    });//Essa é a lista já filtrada em um único elemento.
    //Aqui alterei o estado do nosso componente com as sugestões
    this.setState({ autocompleteEmployee });
  }

  render() {
    const { autocompleteEmployee } = this.state;
    const { onChange } = this.props;

    return (
      <Fragment>
        <Autocomplete
          suggestions={autocompleteEmployee}
          handleFatherState={onChange}
        />
      </Fragment>
    );
  }
}
