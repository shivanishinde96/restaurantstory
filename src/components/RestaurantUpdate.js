import React, { Component } from 'react'
import {Button,Form,Container} from 'react-bootstrap'
import Navigation from './Navigation'
export default class RestaurantUpdate extends Component {

    constructor(){
        super()
        this.state={
            name:null,
            email:null,
            rating:null,
            id:null
        }
    }


    componentDidMount() {
        console.log("update-componentDidMount")
        fetch("http://localhost:3000/restaurant/"+this.props.match.params.id)
            .then(res => res.json())
            .then((data) => {this.setState({name:data.name,
                id:data.id,
            email:data.email,
            rating:data.rating})
            })

    }

    update=()=>{
        console.log("update")
        fetch("http://localhost:3000/restaurant/"+this.state.id,{
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(res=>res.json())
        .then(data=>{console.log(data)})
        
    }

    render() {
        //console.log(this.props.match.params.id)
        console.log("render")
        return (
            <div>
            <Navigation/>
                <h1>Restaurant Update</h1>
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
               
                <Button onClick={() => { this.update() }}>Edit Restaurant</Button>{' '}
               
            </div>
        )
    }
}
