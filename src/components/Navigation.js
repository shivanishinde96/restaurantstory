import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList,faSearch,faPlus,faHome,faUser } from '@fortawesome/free-solid-svg-icons'

class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Restaurant Story</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home"><Link to='/'><FontAwesomeIcon icon={faHome} />Home</Link></Nav.Link>
                            <Nav.Link href="#list"><Link to='/list'><FontAwesomeIcon icon={faList} />List</Link></Nav.Link>
                            <Nav.Link href="#create"><Link to='/create'><FontAwesomeIcon icon={faPlus} />Create</Link></Nav.Link>
                            <Nav.Link href="#search"> <Link to='/search'><FontAwesomeIcon icon={faSearch} />Search</Link></Nav.Link>
                            
                            {/*{
                                localStorage.getItem('login')?
                                <Nav.Link href="#logout"><Link to='/logout'><FontAwesomeIcon icon={faUser} />Logout</Link></Nav.Link>
                                :<Nav.Link href="#login"><Link to='/login'><FontAwesomeIcon icon={faUser} />User Login</Link></Nav.Link>
                            }*/}

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation