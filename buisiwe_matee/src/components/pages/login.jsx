import React, { Component } from 'react'
import http,{axios} from 'axios'
import { useHistory } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email:'',
            password:'',
            isLoggedIn:false,
            historyObj:{}
         }
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
    }

    handleEmail = event => {this.setState({email:event.target.value})}
    handlePass = event => {this.setState({password:event.target.value})}

    handleSubmit = (event) => {
        event.preventDefault();
    
        var user = {
            email: this.state.email,
			password: this.state.password,
        };

        const headers = {
            'Content-Type': 'application/json'
          }

        http.post(
            `https://user-manager-three.vercel.app/api/user/login`,
            user,{
                 headers:headers
             }
        )
        .then(res => {
            if (res.status === 200) {
                this.setState({isLoggedIn: true})
            }
        })
    }
    componentDidMount = () => {
        console.log(this.props);
        this.setState({historyObj:this.props});
    }

    handleLogin = () => {
        return this.state.historyObj.history.push('/shopping-list');
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        email:
                        <input type="email" placeholder="email" onChange={this.handleEmail} />
                    </label>
                    <label>
                        Password:
                        <input type="password" placeholder="password" onChange={this.handlePass} />
                    </label>
                    <button type="submit" onClick={this.handleLogin}>LOGIN</button>
                </form>
            </div>
         );
    }
}
 
export default Login;