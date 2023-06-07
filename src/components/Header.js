import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const { theme, toggle, light } = useContext(ThemeContext);
    return (
        <header className='header' style={{ background: theme.navBackground }}>
            <nav className='navbar'>
                <ul>
                    <li><Link to={'/'} className='active'>Home</Link></li>
                    <li><Link to={'/trendy'}>Trendy Movie</Link></li>
                    <li><Link to={'/watch-later'}>Watch Later</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                </ul>
            </nav>
            <div className='header-right'>
                <input className='search-bar' type='text' placeholder='Search' style={{ background: theme.searchBarBackground }} />
                <Link to={'/sign-up'}>Sign up</Link>
                <Link to={'/login'}>Login</Link>
                <a href='#' className='switch-mode' onClick={toggle}><FontAwesomeIcon icon={faLightbulb} /></a>
            </div>
        </header>
    )
}