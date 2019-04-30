import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Form, Container, Col, Button } from 'react-bootstrap';
import axios from 'axios';


class Update extends Component {
	constructor(args) {
		super(args);
		this.state = {
			id_pessoa:'',
			nome: '',
			apelido: '',
			email: '',
			redirect: false
		};
    }
	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	
       handleUpdate = async (event) => {
            event.preventDefault();
        try {
           const response = await axios.put("http://localhost:3001/api/employees", this.state, { headers: "application/json"});
            console.log(response.data);
        } catch (err) {
                console.log(err);
              }
        }
        render() {
    if (this.state.redirect) {
    return <Redirect to="/" />;
    } else {
        return (
            <div className="lastForm">
                <div className="formCad" >
                    <Form>
                        <h1>Editar</h1>
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
                                </Form.Row>  
 
                                <div className="btnCad">
                                        <Col>
                                            <Button type="submit" value="Enviar dados"
                                            onClick={e => { this.handleUpdate(e)}}>Salvar</Button>
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
export default Update;
