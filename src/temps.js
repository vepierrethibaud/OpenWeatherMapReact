import React, { Component } from 'react'
import logo from './img/logo.svg';

class Temps extends Component{

    render(props){
        return(
            <div>
                <h2>{this.props.ville}, {this.props.pays}</h2>
                <p>{this.props.date}</p>

                <div className="infosWeather">
                    <h3>{this.props.temperature}°C</h3>
                    <div className="etat">
                        <img className="logo" src={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt="logo"/>
                        <p>{this.props.temps}</p>
                    </div>
                </div>

                <div className="infosAdd">
                    <p>Vent: {this.props.vent} mph</p>
                    <p>Humidité: {this.props.humidite}%</p>
                </div>
            </div>
        ) 
    }
}
    
export default Temps;