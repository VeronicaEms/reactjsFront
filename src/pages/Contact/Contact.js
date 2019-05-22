import React, { Component } from 'react';
import '../../styles/global.css';

class Contact extends Component {
	constructor(args) {
		super(args);
		this.state = {
			nome: '',
			apelido: '',
			email: '',
			message: ''
		};
	}

	onChange(e) {
		this.setState({
		  [e.target.id]: e.target.value
	  })}

	save(e) {
		this.setState({
			message: 'Enviado com sucesso'
		});
	}

	render() {
		return (
			<div className="card text-white bg-dark mb-3">
					<div className="card-header"> Contato </div>
						<div className="card-body">
								<form>
								<div className="form-group row">
									<label htmlFor="nome" className="col-sm-3 col-form-label"> Nome </label>
									<div className="col-sm-8">
									<input type="text" className="form-control" id="nome" value={this.state.nome}
									onChange={ e => this.onChange(e) } />
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

								<div className="input-group">
								<div className="input-group-prepend">
									<span className="input-group-text"></span>
								</div>
								<textarea className="form-control" aria-label="Com textarea"
								 id="message" placeholder="Escreva sua mensagem aqui"
								 value={this.state.message} onChange={ e => this.onChange(e) }>
								 </textarea>
								</div>


						<div className="form-group row">
    								<div>
      									<button type="submit" className="btn btn-primary" onClick={this.save.bind(this)}>
										  {' '}
										Enviar{' '}
										</button>
    								</div>
 								</div>
						
						</form>
				</div>
			</div>
		);
	}
}

export default Contact;
