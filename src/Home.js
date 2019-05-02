import React, { Component } from 'react';
import './Home.css';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';


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
                <td><Button type="button" className="btn btn-danger">Excluir</Button></td>
						</tr>
              )
            })}
            </tbody>
          </Table>
        );
		}
}

export default Home;

