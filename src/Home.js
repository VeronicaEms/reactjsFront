import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';
import { Button, Table, FormControl, Form } from 'react-bootstrap';


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            listEmployee : [],
            search: ''
            }
        }        

       onChange = e => {
          this.setState({
            search: e.target.value
          })}


        homeUpdate = (id_pessoa) =>
        {
            this.props.history.push(`/update/${id_pessoa}`)
        }

        homeRemove = async id_pessoa => {
          console.log(">>> HOMEREMOVE()", id_pessoa);
          await axios
            .delete(`http://localhost:3001/api/employees/${id_pessoa}`)
            .then(res => {
              this.componentDidMount();
              if (res.data.affectedRows === 1) {
              console.log(">USUÁRIO REMOVIDO", res.data.affectedRows);
              }
            });
        };

        getAllData = async () => {
          const res = await axios.get("http://localhost:3001/api/employees");
          console.log(res.data);
          this.setState({ listEmployee: res.data });
        };
      
        componentDidMount() {
          this.getAllData();
        }
    

        searchAll = async () => {
          const res = await axios.get("http://localhost:3001/api/employees", { params: { email: this.state.search } });
          console.log(res.data);
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
                <th>
                  <Form inline>
                  <FormControl type="email" className=""
                  id="filter" value={this.state.search} onChange={e => this.setState({ search: e.target.value })}/>
                  <Button variant="outline-info" onClick={this.searchAll}>Procurar</Button>
                  </Form>
                </th>

             </tr>
            </thead>
            <tbody>
                {this.state.listEmployee.map((release, index) => {
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


