import React, { Component } from 'react';
import axios from 'axios';
import './css/Login.css';


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
		  [e.target.id]: e.target.value
	  })}

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
		  console.log(response.data);
		  this.props.history.push('/')
        } catch (err) {
          console.log(err);
		}
      };
	 
	render() {
			return (
				<div className="card text-white bg-dark mb-3">
					<div className="card-header"> Login </div>
						<div className="card-body">
								<form onSubmit={e => this.onSubmit(e)}>
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
												>Login</button>
    								</div>
 								</div>

						</form>
				    </div>
				</div>
			);
		}
	}



export default Login;
