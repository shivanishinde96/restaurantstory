import React, { Component } from 'react'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
import Navigation from './Navigation'

class RestaurantList extends Component {
    constructor() {
        console.log('constructor')
        super()
        this.state = {
            list: null
        }
    }

    componentDidMount() {
        this.getData()
    }

       getData(){
        fetch("http://localhost:3000/restaurant")
            .then(res => res.json())
            .then((data) => {
                this.setState({ list: data }, () => { console.log("from setstate") })
            })
        }
    

    delete=(id)=>{
        fetch("http://localhost:3000/restaurant/"+id,{
            method:"DELETE",
            
           
        })
        .then(res=>res.json())
        .then(data=>{console.log("deleted")})
        alert("Restaurant has been deleted")
        this.getData()
       
    }
    
    render() {
        console.log("from render")
        return (

            <div>
            <Navigation/>
                <h1>Restaurant List</h1>
                {this.state.list ?
                    <div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Rating</th>
                                    <th>Edit/Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.list.map((item, i) => (


                               
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.rating}</td>
                                        <Link to={'/update/'+item.id}>
                                        <FontAwesomeIcon icon={faEdit} color="orange" /></Link>
                                        <span onClick={()=>this.delete(item.id)} style={{backgroundColor:"#d5e1df"}}><FontAwesomeIcon icon={faTrash} color="red"/></span>
                                        
                                        
                                    </tr>
                                  
                               

                                ))}
                                </tbody>
                                </Table>
                </div>
                    : <p>Please Wait!!!</p>}
                {console.log("rstatement")}
            </div>

        )
    }
}

export default RestaurantList