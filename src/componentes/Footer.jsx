import React from 'react'
import './styles/Footer.css'

const Footer = (props) => {
    return(
        <div className="footer">
            <h1>Footer</h1>
            <p>{props.msg}</p>
        </div>
    )
}

export default Footer