import axios from 'axios';
import { API_KEY } from '../../const';
import { useState } from 'react';
import styles from './cityinput.module.css';


export function CityInputForm({onCoordinatesChange}) {
    const [inputValue, setInputValue] = useState('');
    
  
  
    const handleInputChange =(e) =>{
      setInputValue(e.target.value);
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=1&appid=${API_KEY}`
  
        );
        
        const result =response.data[0];
        const latitude = result.lat;
        const longitude = result.lon;
        const city_name = result.name.toString;
        
  
        onCoordinatesChange({latitude, longitude});
      }
        catch (error) {
          console.error('Coordinates error', error);
          
  
      }
  
    };
    return (
      <div className={styles.form}>
        <form  onSubmit={handleSubmit}>
          <label className={styles.label}>
            Input a city:
            <input className={styles.input}
              type='text'
              value={inputValue}
              onChange={handleInputChange}
            />
          </label>
          <button className={styles.button} type='submit'>Submit</button>
        </form>
      </div>
    );
  
  }
  
  