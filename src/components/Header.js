import React, { useState, useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faRightToBracket, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { AppBar, Box, Toolbar, IconButton, Menu, MenuItem, Typography, Avatar } from '@mui/material';
import useDocumentTitle from './hooks/useDocumentTitle';
import useAuth from './hooks/useAuth';
const pages = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "News", path: "/news" },
    { id: 3, name: "About Us", path: "/about-us" },
    { id: 4, name: "Contact", path: "/contact" },
];
const settings = [
    { id: 1, name: "Login", path: "/login" },
    { id: 2, name: "Sign Up", path: "/sign-up" },
];

export default function Header() {
    const { user, logOut } = useAuth();
    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error);
        }
    }

    const { theme, toggle } = useContext(ThemeContext);
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const location = useLocation();
    let title = 'React App';
    pages.forEach(page => {
        if (location.pathname === page.path) {
            title = page.name;
        }
    })
    settings.forEach(setting => {
        if (location.pathname === setting.path) {
            title = setting.name;
        }
    })
    useDocumentTitle(title);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="sticky" sx={{ background: theme.navBackground, color: theme.color }}>
            <Toolbar disableGutters>
                <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                    <IconButton
                        sx={{ paddingLeft: '20px' }}
                        size="medium"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page.id} onClick={handleCloseNavMenu} className='menu-item'>
                                <Link className={location.pathname === page.path ? "active" : ""} to={page.path}>{page.name}</Link>
                            </MenuItem>
                        ))}
                    </Menu>
                    {user?.displayName ? (
                        <>
                            <div style={{ position: 'absolute', right: 0, paddingRight: '20px' }}>
                                <button className='switch-mode' onClick={toggle}><FontAwesomeIcon style={{ height: '15px', marginRight: '5px' }} icon={faLightbulb} /></button>
                                <IconButton
                                    size="small"
                                    aria-controls="menu-userbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenUserMenu}
                                    color="inherit"
                                >
                                    <Avatar alt={user.email} src={user.photoURL} />
                                </IconButton>
                            </div>
                            <Menu
                                id="menu-userbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                                sx={{
                                    display: { xs: 'block', sm: 'none' },
                                }}
                            >
                                <MenuItem onClick={handleCloseUserMenu} className='menu-item'>
                                    <Link className={location.pathname === '/add-film' ? "active" : ""} to='/add-film'>Add Film</Link>
                                </MenuItem>
                                <MenuItem className='menu-item'>
                                    <Typography onClick={handleSignOut}>Logout</Typography>
                                </MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <div style={{ position: 'absolute', right: 0, paddingRight: '20px' }}>
                                <button className='switch-mode' onClick={toggle}><FontAwesomeIcon style={{ height: '15px', marginRight: '5px' }} icon={faLightbulb} /></button>
                                <IconButton
                                    size="medium"
                                    aria-controls="menu-userbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenUserMenu}
                                    color="inherit"
                                >
                                    <FontAwesomeIcon icon={faRightToBracket} />
                                </IconButton>
                            </div>
                            <Menu
                                id="menu-userbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                                sx={{
                                    display: { xs: 'block', sm: 'none' },
                                }}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting.id} onClick={handleCloseNavMenu} className='menu-item'>
                                        <Link className={location.pathname === setting.path ? "active" : ""} to={setting.path}>{setting.name}</Link>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </>
                    )}
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, paddingLeft: '30px' }}>
                    {pages.map((page) => (
                        <Link key={page.id} onClick={handleCloseNavMenu} style={{ padding: '10px' }} className={location.pathname === page.path ? "active" : ""} to={page.path}>{page.name}</Link>
                    ))}
                </Box>
                {user?.displayName ? (
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, paddingRight: '30px', position: 'absolute', right: 0 }}>
                        <button className='switch-mode' onClick={toggle}><FontAwesomeIcon style={{ height: '15px', marginRight: '5px' }} icon={faLightbulb} /></button>
                        <IconButton
                            size="small"
                            aria-controls="menu-userbar"
                            aria-haspopup="true"
                            onClick={handleOpenUserMenu}
                            color="inherit"
                        >
                            <Avatar alt={user.email} src={user.photoURL} />
                        </IconButton>
                        <Menu
                            id="menu-userbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleCloseUserMenu} className='menu-item'>
                                <Link className={location.pathname === '/add-film' ? "active" : ""} to='/add-film'>Add Film</Link>
                            </MenuItem>
                            <MenuItem className='menu-item'>
                                <Typography onClick={handleSignOut}>Logout</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                ) : (
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, paddingRight: '30px', position: 'absolute', right: 0 }}>
                        {settings.map((setting) => (
                            <Link key={setting.id} onClick={handleCloseUserMenu} style={{ padding: '10px' }} className={location.pathname === setting.path ? "active" : ""} to={setting.path}>{setting.name}</Link>
                        ))}
                        <button className='switch-mode' onClick={toggle}><FontAwesomeIcon icon={faLightbulb} /></button>
                    </Box>
                )}
            </Toolbar>
        </AppBar>

    );
    // const { theme, toggle } = useContext(ThemeContext);
    // return (
    //     <header className='header' style={{ background: theme.navBackground }}>
    //         <nav className='navbar'>
    //             <ul>
    //                 <li><Link to={'/'} className='active'>Home</Link></li>
    //                 <li><Link to={'/news'}>News</Link></li>
    //                 <li><Link to={'/about-us'}>About Us</Link></li>
    //                 <li><Link to={'/contact'}>Contact</Link></li>
    //             </ul>
    //         </nav>
    //         <div className='header-right'>
    //             <input className='search-bar' type='text' placeholder='Search' style={{ background: theme.inputBackground }} />
    //             <Link to={'/sign-up'}>Sign up</Link>
    //             <Link to={'/login'}>Login</Link>
    //             <button className='switch-mode' onClick={toggle}><FontAwesomeIcon icon={faLightbulb} /></button>
    //         </div>
    //     </header>
    // )
}