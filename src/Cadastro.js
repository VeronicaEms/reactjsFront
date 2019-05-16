import React, { Component } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';
import './css/Cadastro.css';

class Cadastro extends Component {
	constructor(args) {
		super(args);
		this.state = {
			id_pesoa:'',
			nome: '',
			apelido: '',
			email: '',
			password: '',
			redirect: false
		};
	} 

	onChange(e) {
		this.setState({
		  [e.target.id]: e.target.value
	  })}

		callLogin = () => {
			this.setState({
				redirect: true
			});
		};
	
	 
handleSubmit = async (event) => {
    event.preventDefault();
   const arrInsert = {
    nome: this.state.nome,
	apelido: this.state.apelido,
	email: this.state.email,
	password:this.state.password
    };
    const token = await localStorage.getItem('token');
	const res = await axios.post("http://localhost:3001/api/employees", arrInsert, { headers: { "Authorization": `Bearer ${token}` } });
	console.log(res.data);
}

	render() {
		if (this.state.redirect) {
		return <Redirect to="./login" />;
		} else {
			return (
				<div className="card text-white bg-dark mb-3">
					<div className="card-header"> Cadastro </div>
						<div className="card-body">
								<form>
								<div className="form-group row">
									<label htmlFor="nome" className="col-sm-3 col-form-label"> Nome </label>
									<div className="col-sm-8">
									<input type="text" className="form-control" id="nome" value={this.state.nome}
									onChange={ e => this.onChange(e) }/>
									</div>
								</div>

								<div className="form-group row">
									<label htmlFor="apelido" className="col-sm-3 col-form-label"> Apelido </label>
									<div className="col-sm-8">
									<input type="text" className="form-control" id="apelido" value={this.state.apelido}
									onChange={ e => this.onChange(e) }/>
									</div>
								</div>

								<div className="form-group row">
									<label htmlFor="email" className="col-sm-3 col-form-label"> Email </label>
									<div className="col-sm-8">
									<input type="email" className="form-control" id="email" value={this.state.email}
									onChange={ e => this.onChange(e) }/>
									</div>
								</div>

								<div className="form-group row">
									<label htmlFor="password" className="col-sm-3 col-form-label"> Senha </label>
									<div className="col-sm-8">
									<input type="password" className="form-control" id="password" value={this.state.password}
									onChange={ e => this.onChange(e) }/>
									</div>
								</div> 

								<div className="form-group row">
    								<div>
      									<button type="submit" className="btn btn-primary"
										onClick={e =>
										{ this.handleSubmit(e)
										 this.callLogin()}}
										>Cadastrar</button>
    								</div>
 								</div>

						</form>
				    </div>
				</div>
			);
		}
	}
}
export default Cadastro;
