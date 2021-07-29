import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'

import './styles/App.css'

class App extends Component {
    constructor(){
        super()
        this.state = {
            mensajeHeader: "Soy un header",
            mensajeFooter: "Soy un footer"
        }

        this.cambiarMensajeHeader = this.cambiarMensajeHeader.bind(this)
    }

    cambiarMensajeHeader(){
        this.setState({
            mensajeHeader: "Sigo siendo un header"
        })
    }

    render(){
        return(
            <div className="main">
                <Header mensaje={this.state.mensajeHeader}/>
                    <div>
                        <p>Contenido</p>
                        <button onClick={this.cambiarMensajeHeader}>Cambia header</button>
                    </div>
                <Footer msg={this.state.mensajeFooter}/>
            </div>
        )
    }
}


export default App