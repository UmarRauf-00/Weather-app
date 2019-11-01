import React from 'react';
import  Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'


const API_KEY = '64f64a5d84a3e428a3fcbb2c3e8d09fd';

class App extends React.Component {

    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
    const City = e.target.elements.city.value;
    const Country = e.target.elements.country.value;

        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City},${Country}&APPID=${API_KEY}&units=metric` );
        const data = await api_call.json();
        
        if(City && Country){
            //setting values to state
            this.setState ({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            });
        } else {
            this.setState ({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter the values"
            });
        }
    }

    render() {
        return (
            <div className="ui centered padded grid ">
                <div classname="">
                    <div className="">
                        <Titles />
                    </div>
                    <div className="ui horizontal divider"></div>
                    <Form getWeather={this.getWeather}/>
                    <br></br>
                    <Weather
                        temperature={this.state.temperature}
                        city={this.state.city}
                        country={this.state.country}
                        humidity={this.state.humidity}
                        description={this.state.description}
                        error={this.state.error}                     
                    />
                </div>
            </div>
        );
    }
}

export default App