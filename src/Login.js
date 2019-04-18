import React, { Component } from 'react';
//import { Redirect } from 'react-router';
import './Login.css';
import { Form, Container, Col, Button } from 'react-bootstrap';
import axios from 'axios';
//import Auth from './Auth';

class Login extends Component {
	constructor(props){
		super(props);

		this.state = {
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


	onSubmit(e) {
		this.setState({
			[e.target.submit]: e.target.value
		});
	}


	callHome = () => {
		this.setState({
			redirect: true
		});
	};


	
	render() {
		/*if (this.state.redirect) {
			return <Redirect to="/" />;
		} else {*/
			return (
				<div className="lastForm">
					<div className="formLogin">
						<Form onSubmit={this.onSubmit.bind(this)}>
							<h1>Login</h1>
							<Container>
								<Form.Row>									
									<Col>
									<div className="col-sm-12">
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
									</div>

									</Col>
								</Form.Row>						
									<br />		
								<Form.Row>							
									<Col>									
									<div className="col-sm-12">
										<Form.Group as={Col}>
											<Form.Label htmlFor="password"> Senha </Form.Label>
											<Form.Control
												value={this.state.password}
												onChange={this.onChange.bind(this)}
												name="password"
												id="password"
												type="password"
											/>
										</Form.Group>
									</div>
									</Col>
								</Form.Row>
								<Form.Row> 
									<div className="btnLogin">
										<Button type="submit" className="" onClick={() => this.callHome()}>
											{' '}
											Cadastrar{' '}
										</Button>
									</div>
								</Form.Row>
							
							</Container>
						</Form>
					</div>
				</div>				
			);
		}
	}


export default Login;
