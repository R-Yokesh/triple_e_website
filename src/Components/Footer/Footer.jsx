import React from 'react';
import Assets from '../../Assets/AssetsFormat/Assets';
import { Link } from 'react-router-dom';

function Footer() {

    const date = new Date().getFullYear();

    return (
        <section className='footer-sec'>
            <div className='row logo-spearate-sec'>
                <div className='footer-logo'>
                    <img src={Assets.Logo} alt="footer-logo" />
                </div>
                <div className='footer-links'>
                    <div className='row row-one'>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/news'>News</Link>
                        <Link to='/'>Contact</Link>
                    </div>
                    <div className='row row-reverse-sec'>
                        <Link to='/'>Terms &amp; Conditions</Link>
                        <Link to='/'>Privacy Policy</Link>
                        <Link to='/'>FAQs</Link>
                        <Link to='/'>Help</Link>
                    </div>
                </div>
            </div>
            <p className='copy-text'>Copyright &copy; {date}</p>
        </section>
    )
}

export default Footer
