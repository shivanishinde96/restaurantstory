import React, { Component } from 'react'
import { Form, Container,Button } from 'react-bootstrap'
import Navigation from './Navigation'
class RestaurantCreate extends Component {
    constructor() {
        super()
        this.state = {
            name: null,
            email: null,
            rating: null
        }
    }
    create = () => {
        fetch("http://localhost:3000/restaurant", {
            method: "Post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(res => res.json())
            .then(data => { console.log(data) })
            alert("Restaurant details created!!! Please Check the list")

    }
    render() {
        return (<>
           
            <div>
                <Navigation/>
                <h1>Restaurant Create</h1>
            <Form type="text" onChange={(event) => { this.setState({ name: event.target.value }) }}>
                    <Form.Group controlId="formBasicEmail">
                        <Container>
                        <Form.Control type="text" placeholder="Enter Restaurant Name" autoComplete="off"/>

                        </Container>
                    </Form.Group>
                </Form>
                <Form type="text" onChange={(event) => { this.setState({ email: event.target.value }) }}>
                    <Form.Group controlId="formBasicEmail">
                        <Container>
                        <Form.Control type="text" placeholder="Enter Restaurant Email" autoComplete="off"/>
                        
                        </Container>
                    </Form.Group>
                </Form>
                <Form type="text" onChange={(event) => { this.setState({ rating: event.target.value }) }}>
                    <Form.Group controlId="formBasicEmail">
                        <Container>
                        <Form.Control type="number" placeholder="Enter Restaurant Rating" autoComplete="off"/>
                        
                        </Container>
                    </Form.Group>
                </Form>
                
                
                <Button onClick={() => { this.create() }}>Add Restaurant</Button>{' '}
                       
            
                

            </div>
        </>
        )
    }
}
export default RestaurantCreate