import React, { Component } from 'react';
import './Home.css';
import { Table, Button } from 'react-bootstrap';


class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			releases: [
				{
					id: 1,
					nome: 'primeiro',
					apelido: 'apelido',
					email: 'email'

				},
				{
					id: 2,
					nome: 'segundo',
					apelido: 'apelido',
					email: 'email'

				},
				{
					id: 3,
					nome: 'terceiro',
					apelido: 'apelido',
					email: 'email'

				}
			]
		}
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
			<tr key={release.id}>
			 	<th>{release.id}</th> 
				<td>{release.nome}</td>
				<td>{release.apelido}</td>
				<td>{release.email}</td>
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
