import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            releases : []
            }
				}
				
        homeUpdate = (id_pessoa) =>
        {
            this.props.history.push(`/update/${id_pessoa}`)
        }

        homeRemove = async (id_pessoa) => {
        await axios.delete("http://localhost:3001/api/employees", {
        id_pessoa,
        })
          console.log(">USUÁRIO REMOVIDO");
        }

       async componentDidMount(){
            const releases  = await axios.get('http://localhost:3001/api/employees')
            console.log(releases);
            this.setState({releases: releases.data});
            }   
    

    render() {
        return (
            <Table striped bordered hover variant="dark">
            <thead>
             <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Apelido</th>
                <th>Email</th>
                <th></th>

             </tr>
            </thead>
            <tbody>
                {this.state.releases.map((release, index) => {
             return (
            <tr key={index}>
                 <th>{release.ID_PESSOA}</th> 
                <td>{release.NOME}</td>
                <td>{release.APELIDO}</td>
                <td>{release.EMAIL}</td>
                <td><Button type="button" className="btn btn-primary"
                onClick={() =>this.homeUpdate(release.ID_PESSOA)}
                >Editar</Button></td>

                <td><Button type="button" className="btn btn-danger"
                onClick={() => this.homeRemove(release.ID_PESSOA)}
                >Excluir</Button></td>
						</tr>
              )
            })}
            </tbody>
          </Table>
        );
		}
}

export default Home;
