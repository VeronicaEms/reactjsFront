import React, { Component } from 'react';
import { Redirect } from 'react-router';
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

	onSubmit(e) {
		e.preventDefault();
		this.callHome();
	  }

	 callHome = async () => {
    console.log("estou no callHome");
    const token = await axios.post(
        "http://localhost:3001/api/login",
        {
          email: this.state.email,
          password: this.state.password
        },
        { "Content-Type": "application/json" }
	  )
	  
      .then(res => {
		  //console.log(res);
		//console.log(res.config.data);
		console.log(res.data.token);
      })
      .catch(err => {
        console.log(err);
      });

    //console.log(token);
  };

	render() {
		if (this.state.redirect) {
			return <Redirect to="/" />;
		} else {
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
									<Button type="submit" className="" >Entrar</Button>
									</div>
								</Form.Row>
							
							</Container>
						</Form>
					</div>
				</div>				
			);
		}
	}
}


export default Login;
