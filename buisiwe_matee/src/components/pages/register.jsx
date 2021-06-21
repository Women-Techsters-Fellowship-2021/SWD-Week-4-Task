import React, { Component } from 'react'
import http,{axios} from 'axios'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email:'',
            password:'',
            confirmPassword:'',
            isLoggedIn:false,
         }
    }

    handleRegister = ({ password, confirmPassword }) => {
        password = this.state.password;
        confirmPassword = this.state.confirmPassword;

		if (password && confirmPassword && password !== confirmPassword) {
			return alert(`passwords don't match`);
		}
        return this.props.history.push('/shopping-list');
    }

    handleSubmit = (event) => {
        event.preventDefault();

        var Adduser = {
            email: this.state.email,
			password: this.state.password,
        };

        const headers = {
            'Content-Type': 'application/json'
        }

        http.post(
            `https://user-manager-three.vercel.app/api/user/register`,
            Adduser,{
                 headers:headers
             }
        )
        .then(res => {
            console.log(res);
            if (res.status === 201) {
                this.setState({isLoggedIn: true})
            }
        })
    }
    handleEmail = event => {this.setState({email:event.target.value})}
    handlePass = event => {this.setState({password:event.target.value})}
    handleConfirmPass = event => {this.setState({confirmPassword:event.target.value})}

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
                    <label>
                        Confirm password:
                        <input type="password" placeholder="password" onChange={this.handleConfirmPass} />
                    </label>
                    <button type="submit" onClick={this.handleRegister}>REGISTER</button>
                </form>
            </div>
         );
    }
}
 
export default Register;