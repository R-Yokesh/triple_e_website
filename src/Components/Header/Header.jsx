import React, { useState } from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Assets from '../../Assets/AssetsFormat/Assets';

function Header() {

    const [SearchDisplay, setSearchDisplay] = useState(false)

    return (
        <section className='header-sec'>
            <Navbar expand="lg" className="bg-body-tertiary common-space" fixed="top">
                {/* <Container fluid> */}
                <Navbar.Brand><Link to='/'><img src={Assets.Logo} alt="logo" className='logo-img' /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className='justify-sec'>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link><span><Link to='/'>Home</Link></span></Nav.Link>
                        <Nav.Link><span><Link to='/about'>About</Link></span></Nav.Link>
                        <Nav.Link><span><Link to=''>Events</Link></span></Nav.Link>
                        <Nav.Link><span><Link to=''>News</Link></span></Nav.Link>
                        <Nav.Link><span><Link to=''>Contact</Link></span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="navbarScroll" className='justify-sec'>
                    <Form className="d-flex search-sec">
                        {SearchDisplay ? (
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                        ) : (
                            <p>Search</p>
                        )
                        }
                        <img src={Assets.Search} alt="search-icon" className={SearchDisplay && 'box-display'} onClick={(e) => setSearchDisplay(true)} />
                        {SearchDisplay && (
                            <span className='cancel-sec' onClick={(e) => setSearchDisplay(!SearchDisplay)}>&times;</span>
                        )
                        }

                        {/* <i class="fa fa-search" aria-hidden="true"></i> */}
                    </Form>
                </Navbar.Collapse>
                {/* </Container> */}
            </Navbar>
        </section>
    )
}

export default Header
