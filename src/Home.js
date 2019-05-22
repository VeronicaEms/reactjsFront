import React, { Component } from "react";
import axios from "axios";
import Pagination from "../../components/Pagination.js";
import AutoCompleteEmployee from "../../components";
import "bootstrap/dist/css/bootstrap.css";
import '../../styles/global.css';


class Home extends Component {
  state = {
    employees: [],
    filteredEmployees: [],
    actualPageEmployees: [],
    search: ""
  };

  /**
   * Handle change page.
   */
  handleTablePagination = items => {
    //Atualiza o state com uma nova página de itens
    this.setState({ actualPageEmployees: items });
  };

  /**
   * Handle edit employee
   */
  handleEditEmployee = id_pessoa => {
    this.props.history.push(`/update/${id_pessoa}`);
  };

  /**
   * Handle remove employee.
   */
  handleRemoveEmployee = async id_pessoa => {
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


  /**
   * Handle input search.
   */
  handleChangeSearch = async (value) => {                      
    await   this.setState({ 
    search: value
     });
   this.filterData();
  };


  /**
   * Handle search request.
   */
  handleSearchSubmit = e => {
    e.preventDefault(); // Previnir o reload da página
    this.getAllData.filterData();
  };


  filterData = e => {
    // O employees é toda a lista retornada pelo servidor (todos meus registros)
    const { employees, search } = this.state;
    // O filtered é a lista filtrada, se digitar algo no input, ele filtra o employees e armazena.
    let filteredEmployees = [];

     if (typeof search !== undefined && search !== "") {
      filteredEmployees = employees.filter(element => {
        return element.NOME.toLowerCase().includes(search.toLowerCase());
      });
    } 

    this.setState(state => ({ ...state, filteredEmployees }));
  }

  /**
   * Request all employees data.
   */
  getAllData = async () => {
     const res = await axios.get("http://localhost:3001/api/employees");
     this.setState({ employees : res.data }); 
  };

  /**
   * ComponentDidMount.
   */
  componentDidMount() {
    this.getAllData();
  }

  render() {
    const { employees, filteredEmployees, actualPageEmployees } = this.state;

    return (
      <div className="container-fluid mt-2 h-100 justify-content-center align-items-center">
        <div className="row">
          <div
            className="col-12 col-md-8 col-lg-6 mx-auto"
            style={{ marginTop: 50, padding: 0 }}
          >
            <form  onSubmit={e => this.handleSearchSubmit(e)} >
              <div className="form-row">
                <div className="form-group col-sm-12 col-lg-8">                  
                  {employees.length > 0 && (
                     <AutoCompleteEmployee
                      listEmployee={employees}
                      onChange={this.handleChangeSearch}
                    /> 
                    )}
                   {/* <input
                    className="form-control form-control-sm"
                    type="search"
                    id="search"
                    value={this.state.search}
                    onChange={e => this.handleChangeSearch(e)}
                    placeholder="Procurar"
                    aria-label="Procurar" 
                  />  */}
                  
                </div>
                <div className="form-group col-sm-12 col-lg-4">
                  <button
                    className="btn btn-lg btn-light btn-block"
                    style={{margin: 0, padding: 0 }}
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
                {actualPageEmployees.map((release, index) => {
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
                          onClick={() =>
                            this.handleEditEmployee(release.ID_PESSOA)
                          }
                        >
                          Editar
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger ml-0 mt-0"
                          type="button"
                          onClick={() =>
                            this.handleRemoveEmployee(release.ID_PESSOA)
                          }
                        >
                          Excluir
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div>
              <Pagination
                items={
                  filteredEmployees.length > 0 ? filteredEmployees : employees
                }
                onChangePage={this.handleTablePagination}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
