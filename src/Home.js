import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
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
        <form className="form-inline">
          <input className="form-control" type="search" id="search" value={this.state.search}
            onChange={ e => this.onChange(e) } placeholder="Search" aria-label="Search"/>
              <button className="btn btn-primary my-2 my-sm-0" type="button" onClick={this.searchEmail}> Search </button>
            <table className="table table-hover table-dark">
            <thead>
             <tr>                
                <th scope="col">Id</th>
                <th scope="col">Nome</th>
                <th scope="col">Apelido</th>
                <th scope="col">Email</th>
                <th scope="col"></th>
                <th scope="col"></th>
             </tr>
            </thead>
            <tbody>
                {this.state.listEmployee.map((release, index) => {
            return (
            <tr key={index}>
                 <th className="text-center" scope="row">{release.ID_PESSOA}</th> 
                <td>{release.NOME}</td>
                <td>{release.APELIDO}</td>
                <td>{release.EMAIL}</td>
                <td><button className="btn btn-primary ml-0 mt-0" type="button"
                 onClick={() =>this.homeUpdate(release.ID_PESSOA)} 
                >Editar</button></td>
                <td><button className="btn btn-danger ml-0 mt-0" type="button"
                onClick={() => this.homeRemove(release.ID_PESSOA)} 
                >Excluir</button></td>
						</tr>
            );
            })}
            </tbody>
          </table>
        </form>
        );
		}
}

export default Home;




