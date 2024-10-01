import React, { useState, useEffect } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Assets from '../../Assets/AssetsFormat/Assets';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [SearchDisplay, setSearchDisplay] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className={`header-sec ${isScrolled ? 'scrolled' : ''}`}>
            <Navbar expand="lg" className={`bg-body-tertiary common-space ${isScrolled ? 'scrolled-navbar' : ''}`} fixed="top">
                <Navbar.Brand>
                    <Link to='/'>
                        <img src={Assets.Logo} alt="logo" className='logo-img' />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className='justify-sec'>
                    <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                        <Nav.Link><span><Link to='/'>Home</Link></span></Nav.Link>
                        <Nav.Link><span><Link to='/about'>About</Link></span></Nav.Link>
                        <Nav.Link><span><Link to='/'>Events</Link></span></Nav.Link>
                        <Nav.Link><span><Link to='/news'>News</Link></span></Nav.Link>
                        <Nav.Link><span><Link to='/'>Contact</Link></span></Nav.Link>
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
                        )}
                        <img
                            src={Assets.Search}
                            alt="search-icon"
                            className={SearchDisplay ? 'box-display' : ''}
                            onClick={() => setSearchDisplay(true)}
                        />
                        {SearchDisplay && (
                            <span
                                className='cancel-sec'
                                onClick={() => setSearchDisplay(false)}
                                style={{ cursor: 'pointer', padding: '0 10px' }}
                            >
                                &times;
                            </span>
                        )}
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </section>
    );
}

export default Header;
