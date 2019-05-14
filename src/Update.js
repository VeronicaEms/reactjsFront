import React, { Component } from "react";
import { Redirect } from "react-router";
import axios from "axios";

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_pessoa: '',
      nome: '',
      apelido: '',
      email: '',
      redirect: false
    };
  }

  onChange(e) {
		this.setState({
		  [e.target.id]: e.target.value
	  })}

  async componentDidMount() {
    const { id_pessoa } = this.props.match.params;
    await this.setState({ id_pessoa });
    const res = await axios.get(
      `http://localhost:3001/api/employees/${id_pessoa}`
    );
    console.log(res);
  }

  handleUpdate = async event => {
    event.preventDefault();
    try {
      const { id_pessoa, nome, apelido, email } = this.state;
      await axios.put("http://localhost:3001/api/employees", {
        id_pessoa,
        nome,
        apelido,
        email
      });
      console.log("> ATUALIZAÇÃO REALIZADA");
      this.setState({ redirect: true });
      return true;
    } catch (err) {
      console.log(err);
      this.setState({ redirect: false });
      return false;
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else {
      return (
        <div className="card text-white bg-dark mb-3">
        <div className="card-header"> Editar </div>
          <div className="card-body">
              <form>
              <div className="form-group row">
                <label for="nome" className="col-sm-3 col-form-label"> Nome </label>
                <div className="col-sm-8">
                <input type="text" className="form-control" id="nome" value={this.state.nome}
               onChange={ e => this.onChange(e) }/>
                </div>
              </div>

              <div className="form-group row">
                <label for="apelido" className="col-sm-3 col-form-label"> Apelido </label>
                <div className="col-sm-8">
                <input type="text" className="form-control" id="apelido" value={this.state.apelido}
                onChange={ e => this.onChange(e) }/>
                </div>
              </div>

              <div className="form-group row">
                <label for="email" className="col-sm-3 col-form-label"> Email </label>
                <div className="col-sm-8">
                <input type="email" className="form-control" id="email" value={this.state.email}
               onChange={ e => this.onChange(e) }/>
                </div>
              </div>

              <div class="form-group row">
                <label for="password" className="col-sm-3 col-form-label"> Senha </label>
                <div className="col-sm-8">
                <input type="password" className="form-control" id="password" value={this.state.password}
                onChange={ e => this.onChange(e) }/>
                </div>
              </div> 

              
								<div className="form-group row">
    								<div>
      									<button type="submit" className="btn btn-primary"
                    onClick={e => {this.handleUpdate(e);}}
										>Salvar</button>
    								</div>
 								</div>

               	</form>
				    </div>
				</div>

      );
    }
  }
}

export default Update;
