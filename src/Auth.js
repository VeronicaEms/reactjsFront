import React, {Component} from 'react';

class Auth extends Component {
constructor(props){
    super(props);

    this.state ={
        user: undefined,
    }
}

render(){
    return(
        <div> olá Auth </div>
    );
}
}

export default Auth;
