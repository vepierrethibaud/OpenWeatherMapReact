import React, {Component} from 'react';
import Temps from './temps.js';
import Header from './header.js';
import SearchBar from './searchBar.js';
import Calendar from './calendar.js';

import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      value: '',
      meteo: {},
      meteoDays: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    var newValue = this.state.value.toLowerCase();
    this.setState({value: newValue});
    console.log(newValue); 

    //Impossible d'update le State value ...
  }

  componentWillMount() {
      this.setState({
          isLoading: true
      })

      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.value ? this.state.value : 'paris'}&lang=fr&units=metric&appid=123d8642bd259c2a606a32c0cef3c4dc`)
      .then(res => {
          const meteo = res.data
          this.setState({
              isLoading: false,
              meteo
          })
      })
      axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.value ? this.state.value : 'paris'}&lang=fr&units=metric&cnt=6&appid=123d8642bd259c2a606a32c0cef3c4dc`)
      .then(res => {
        const meteoDays = res.data
        this.setState({
            isLoading: false,
            meteoDays
        })
      })
  }

  render (props) {
    const { isLoading, meteo, meteoDays } = this.state    
    
    return (
      <div>
        <Header/>

        <SearchBar
          handleChange={this.handleChange}
          value={this.value}
          handleSubmit={this.handleSubmit}
        />
        {
            isLoading ? <p>Chargement...</p>  : 

            <div>
              <main>
                <article id="currentWeather">
                  <Temps
                      ville       = {this.state.meteo.name}
                      pays        = {this.state.meteo.sys.country}
                      date        = {new Date().toLocaleDateString('fr-FR')}
                      temperature = {Math.round(this.state.meteo.main.temp)}
                      vent        = {this.state.meteo.wind.speed}
                      humidite    = {this.state.meteo.main.humidity}
                      temps       = {this.state.meteo.weather.map(w => w.description)[0]}
                      icon        = {this.state.meteo.weather.map(w => w.icon)[0]}
                    />
                </article>

                <section id="calendar">

                    <Calendar
                      // date        = {this.state.meteoDays.list.map(m => m.dt_txt)[0]}
                      // temp_max    = {Math.round(this.state.meteoDays.list.map(m => m.main.temp_max)[0])}
                      // temp_min    = {Math.round(this.state.meteoDays.list.map(m => m.main.temp_main)[0])}
                      // temps       = {Math.round(this.state.meteoDays.list.map(m => m.weather.map(w => w.description)[0])[0])}
                      // Erreur Map ...
                    />
                </section>
              </main> 
            </div>
        }

        

        
      </div> 
    )
  }
};

export default App;
