import React, { Component } from 'react'
import { Button,Form,Container } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import Navigation from './Navigation'
class Login extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            password: ''
        }
    }

    login = ()=>  {
        console.log(this.state)
        fetch("http://localhost:3000/login?q=" + this.state.name)
            .then(res => res.json())
            .then((data => {
                console.log(data)
                
                if (data.length > 0) {

                    localStorage.setItem('login',JSON.stringify(data))
                    console.log(this.props.history.push('list'))
                }
                else {
                    alert("Please check username and password")
                }
            }))


    }

    render() {
        return (
            <div>
            <Navigation/>
                <h1>Login Page</h1>
                <Form>
                    <Container>
                    <Form.Group controlId="formBasicEmail"  onChange={(event) => { this.setState({ name: event.target.value }) }}>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" autoComplete="off"/>
                        
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword"  onChange={(event) => { this.setState({ password: event.target.value }) }}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" autoComplete="off"/>
                    </Form.Group>
                    
                    <Button  onClick={()=>{this.login()}}>
                        Submit
                    </Button>
                    </Container>
                    
                </Form>
            </div>
        )
    }
}

export default Login