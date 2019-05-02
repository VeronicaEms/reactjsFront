import React, { Component } from 'react';
import './Login.css';
import { Form, Container, Col, Button } from 'react-bootstrap';
import axios from 'axios';


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

	onSubmit = e => {
		e.preventDefault();
		this.callHome();
	  }
	 

	  callHome = async () => {
        try {
          console.log("estou no callHome");
		  const { email, password } = this.state 
          const response = await axios.post("http://localhost:3001/api/login", {
            email,
            password
		  })
		  localStorage.setItem('token', response.data.token)
		  this.props.history.push('/')
        } catch (err) {
          console.log(err);
		}
      };
	 
	render() {
			return (
				<div className="lastForm">
					<div className="formLogin">
					<Form onSubmit={e => this.onSubmit(e)}>
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
									<Button id="buttonLogin"
									type="submit" className="" >Entrar</Button>
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

