import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './Cadastro.css';
import { Form, Container, Col, Button } from 'react-bootstrap';
import axios from 'axios';





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
			[e.target.name]: e.target.value
		});
	}

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
				<div className="lastForm">
					<div className="formCad" >
						<Form>
							<h1>Cadastro</h1>
							<Container>
							

									<div className="nome">
										<Col>
											<Form.Group as={Col}>
												<Form.Label htmlFor="nome"> Nome </Form.Label>
												<Form.Control
													value={this.state.nome}
													onChange={this.onChange.bind(this)}
													name="nome"
													id="nome"
													type="text"										
												/>
											</Form.Group>
										</Col>	
									</div>							
									
								
									<div className="apelido">
										<Col>
											<Form.Group as={Col}>
												<Form.Label htmlFor="apelido"> Apelido </Form.Label>
												<Form.Control
													value={this.state.apelido}
													onChange={this.onChange.bind(this)}
													name="apelido"
													id="apelido"
													type="text"
												/>
											</Form.Group>
										</Col>
									</div>

								<Form.Row>
									<div className="email">
										<Col>
											<Form.Group as={Col}>
												<Form.Label htmlFor="email"> E-mail </Form.Label>
												<Form.Control
													value={this.state.email}
													onChange={this.onChange.bind(this)}
													name="email"
													id="email"
													type="email"
												/>
											</Form.Group>
										</Col>										
									</div>

								
									<div className="password">
										<Col>
											<Form.Group as={Col} >
												<Form.Label htmlFor="password"> Senha </Form.Label>
												<Form.Control
													value={this.state.password}
													onChange={this.onChange.bind(this)}
													name="password"
													id="password"
													type="password"
												/>
											</Form.Group>
										</Col>
									</div>
								</Form.Row>  
 
									<div className="btnCad">
										<Col>
											<Button type="submit" value="Enviar dados" onClick={e => {
												this.handleSubmit(e)
												this.callLogin()
											}}>Cadastrar</Button>
										</Col>
									</div>
								
							</Container>
						</Form>
					</div>
				</div>
			);
		}
	}
}
export default Cadastro;

