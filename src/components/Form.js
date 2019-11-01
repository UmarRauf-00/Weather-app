import React from 'react';
import { Icon, Input } from 'semantic-ui-react'



const Form = (props) => {
        return (
            <form className="ui form" onSubmit={props.getWeather}>
                <div class="six wide column padded">
                    <Input icon placeholder='Search...'>
                        <input type="text" name="city" placeholder="city..."/>
                    </Input>
                </div> 

                <div class="six wide column padded"> 
                    <Input icon placeholder='Search...'>
                      
                        <input type="text" name="country" placeholder="country..."/>                
                    </Input>
                </div>
                <div className="ui horizontal divider"></div>
                <button className="ui blue button">Get Weather</button>
            </form>
        )
    }


export default Form