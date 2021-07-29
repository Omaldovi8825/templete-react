import React from 'react'
import './styles/Header.css'

const Header = (props) => {
    return(
        <div className="header">
            <h1>Header</h1>
            <p>{props.mensaje}</p>
        </div>
    )
}

export default Header