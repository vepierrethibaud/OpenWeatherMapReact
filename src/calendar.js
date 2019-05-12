import React, { Component } from 'react'
import logo from './img/logo.svg';

class Calendar extends Component{

    render(props){

        return(
            <div>
                <p className="title">Météos des prochains jours</p>

                <section>
                <article>
                    <p className="jours">Lun</p>
                    <img className="logo" src={logo} alt="logo"/>
                    <p className="temperatures">7°C / <span>10°C</span></p>
                </article>

                <article>
                    <p className="jours">MAR</p>
                    <img className="logo" src={logo} alt="logo"/>
                    <p className="temperatures">7°C / <span>10°C</span></p>
                </article>
                
                <article>
                    <p className="jours">MER</p>
                    <img className="logo" src={logo} alt="logo"/>
                    <p className="temperatures">7°C / <span>10°C</span></p>
                </article>

                <article>
                    <p className="jours">JEU</p>
                    <img className="logo" src={logo} alt="logo"/>
                    <p className="temperatures">7°C / <span>10°C</span></p>
                </article>

                <article>
                    <p className="jours">VEN</p>
                    <img className="logo" src={logo} alt="logo"/>
                    <p className="temperatures">7°C / <span>10°C</span></p>
                </article>

                <article>
                    <p className="jours">SAM</p>
                    <img className="logo" src={logo} alt="logo"/>
                    <p className="temperatures">7°C / <span>10°C</span></p>
                </article>
                </section>

                <p>
                {/* {this.props.date}
                {this.props.temp_max}
                {this.props.temp_min} 
                {this.props.temps} */}
                </p>
            </div>
        ) 
    }
}
    
export default Calendar;