import React, { Component } from 'react'
import { Table,Form,Container } from 'react-bootstrap'
import Navigation from './Navigation'
export default class RestaurantSearch extends Component {
    constructor() {
        super()
        this.state = {
            search: null,
            noData: false
        }
    }

    search = (key) => {
        fetch("http://localhost:3000/restaurant?q=" + key)
            .then(res => res.json())
            .then((data => {
                if (data.length > 0) {
                    this.setState({ search: data, noData: false })
                }
                else {
                    this.setState({ noData: true, search: null })
                }
            }))


    }

    render() {
        return (
            <>
               
                <Navigation/>
                <h1>Restaurant Search</h1>
                <Form type="text" onChange={(event) => { this.search(event.target.value) }}>
                    <Form.Group controlId="formBasicEmail">
                        <Container>
                        <Form.Control type="email" placeholder="Enter restaurant name to search" autoComplete="off"/>
                        </Container>
                    </Form.Group>
                </Form>
                    <div>
                        {this.state.search ?
                            <div>
                                <Container>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Rating</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.search.map((item) => (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.rating}</td>



                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                                </Container>
                            </div> : <p></p>}

                        {this.state.noData ? <p>Results Not Found</p> : null}
                    </div>
            </>
        )
    }
}
