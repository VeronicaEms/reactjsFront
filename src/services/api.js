//Parece que isto está inutilizado 

import axios from 'axios';

function callLogin() {
  axios.get('http://localhost:3000/api/employees')
  .then(function(response) {
      console.log(response)
  })
  .catch(function(erro) {
     console.log(erro);
  })
}

export { callLogin };
