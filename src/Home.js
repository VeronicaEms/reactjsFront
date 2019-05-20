import React, { Component } from "react";
import axios from "axios";
import Pagination from './Pagination.js';
//import Autocomplete from './AutoCompleteEmployee/index.js';
import "bootstrap/dist/css/bootstrap.css";
import './css/Global.css';

class Home extends Component {

  constructor(props) {
    super(props);
    const listEmployee = [];
    this.state = {
      listEmployee,
      filteredEmployee: [],
      search: ""

    };
   this.onChangePage = this.onChangePage.bind(this);    
  }


   onChangePage(items) {
  //Atualiza o state com uma nova página de itens
    this.setState({ filteredEmployee: items
     })};
  

  onChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  homeUpdate = id_pessoa => {
    this.props.history.push(`/update/${id_pessoa}`);
  };

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

  searchEmail = async e => {
    e.preventDefault(); // Previnir o reload da página

    console.log("", this.state.search);
    const res = await axios.get(
      `http://localhost:3001/api/employees/search/${this.state.search}`
    );
    this.setState({ listEmployee: res.data });
  };

  render() {
    return (
      <div className="container-fluid mt-2 h-100 justify-content-center align-items-center">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6 mx-auto"  style={{ marginTop: 50, padding: 0 }}>
            <form onSubmit={e => this.searchEmail(e)}>
              <div className="form-row">
                <div className="form-group col-sm-12 col-lg-8">

                  <Autocomplete
                  suggestions={this.state.listEmployee}
          
                  /*   className="form-control form-control-sm"
                    type="search"
                    id="search"
                    value={this.state.search}
                    onChange={e => this.onChange(e)}
                    placeholder="Procurar"
                    aria-label="Procurar" */
                  />
                </div>
                <div className="form-group col-sm-12 col-lg-4">
                  <button
                    className="btn btn-lg btn-light btn-block"
                    style={{ margin: 0, padding: 0 }}
                    type="submit"
                  >
                    Procurar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6 mx-auto">
            <table className="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Apelido</th>
                  <th scope="col">Email</th>
                  <th scope="col" />
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {this.state.filteredEmployee.map((release, index) => {
                  return (
                    <tr key={index}>
                      <th className="text-center" scope="row">
                        {release.ID_PESSOA}
                      </th>
                      <td>{release.NOME}</td>
                      <td>{release.APELIDO}</td>
                      <td>{release.EMAIL}</td>
                      <td>
                        <button
                          className="btn btn-primary ml-0 mt-0"
                          type="button"
                          onClick={() => this.homeUpdate(release.ID_PESSOA)}
                        >
                          Editar
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger ml-0 mt-0"
                          type="button"
                          onClick={() => this.homeRemove(release.ID_PESSOA)}
                        >
                          Excluir
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
             <tfoot>
              <tr>
               {/*  <td><Pagination items={this.state.listEmployee} onChangePage={this.onChangePage} /></td> */}
              </tr>
            </tfoot>
            </table>
            <div><Pagination items={this.state.listEmployee} onChangePage={this.onChangePage} /></div>
          </div>
        </div>
      </div>
    );
  }
 }

export default Home;
