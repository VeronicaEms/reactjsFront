import React, { Component } from 'react';
import './Cadastro.css';
import { Form, Container, Col, Button } from 'react-bootstrap';
import axios from 'axios';


class Update extends Component {
    constructor(props) {
        super(props);
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
    

    async componentDidMount() {
        const { id_pessoa } = this.props.match.params;
        await this.setState({ id_pessoa });
        const res = await axios.get(`http://192.168.1.65:3001/api/employees/${id_pessoa}`)
        console.log(res); 
      };

    
    handleUpdate = async event => {
        event.preventDefault();
        try {
          const { id_pessoa, nome, apelido, email } = this.state;
          await axios
            .put("http://localhost:3001/api/employees", {
              id_pessoa,
              nome,
              apelido,
              email
            })
          console.log("> ATUALIZAÇÃO REALIZADA");
          return true;
        } catch (err) {
          console.log(err);
          return false;
        }
      };

	
          render() {
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
        
        export default Update;
