import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function Footer() {
    const { theme } = useContext(ThemeContext);
    return (
        <footer>
            <p style={{ color: theme.color }}><FontAwesomeIcon icon={faCopyright} /> Copyright by TLBN</p>
        </footer>
    )
}
