import React, { Component } from 'react';
import axios from 'axios';
import './Home.css';


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
          this.getAllData()
        }
    

        searchEmail = async () => {
          console.log("", this.state.search);
          const res = await axios.get(
            `http://localhost:3001/api/employees/search/${this.state.search}`
          );
          this.setState({ listEmployee: res.data });
        };

    render() {
        return (
            <table className="table table-hover table-dark">
            <thead>
             <tr>
                <th scope="col">Id</th>
                <th scope="col">Nome</th>
                <th scope="col">Apelido</th>
                <th scope="col">Email</th>
                <th scope="col">editar </th>
                <th scope="col">excluir  </th>
             </tr>
            </thead>
            <tbody>
                {this.state.listEmployee.map((release, index) => {
            return (
            <tr key={index}>
                 <td className="text-center" scope="row">{release.ID_PESSOA}</td> 
                <td>{release.NOME}</td>
                <td>{release.APELIDO}</td>
                <td>{release.EMAIL}</td>
                <td><button className="btn btn-primary" type="button"
                onClick={() =>this.homeUpdate(release.ID_PESSOA)}
                >Editar</button></td>
                <td><button className="btn btn-danger" type="button"
                onClick={() => this.homeRemove(release.ID_PESSOA)}
                >Excluir</button></td>
						</tr>
            );
            })}
            </tbody>
          </table>
        );
		}
}

export default Home;



