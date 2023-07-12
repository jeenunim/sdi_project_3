import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from '../Navigation/Header';
import Home from '../Home/home'
import Styles from '../Threat page/Threat.css'

const AddThreat = () => {
    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [weapon_type_id, setWeapon_type_id] = useState(parseInt(0));
    const [img_url, setImg_url] = useState('');

    
    const handleSubmit = (e) => {
        // Simple POST request with a JSON body using fetch
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {name, 
                details, 
                weapon_type_id, 
                img_url}
                )
        };
        fetch('http://localhost:3000/target', requestOptions)
        .then(() => {alert('Threat added successfully'); setTimeout(window.location.reload(), 3000)})
    }
    

    return (
        <div className="addThreatContainer">
            <div>
                <form onSubmit={handleSubmit}>
                    <label className="labelHeaders">Threat Name:
                        <input name="threat"
                        type='text'
                        required
                        value={name} 
                        onChange={(e) => setName(e.target.value)}/>
                    </label><br/><br/>

                    <label className="labelHeaders">Details:
                        <textarea name="details"
                        type='text'
                        required
                        value={details} 
                        onChange={(e) => setDetails(e.target.value)}/>
                    </label><br/><br/>
                    
                    <select value={weapon_type_id} 
                        onChange={(e) => setWeapon_type_id(parseInt(e.target.value))}>
                        
                        <option value='1'>Anti-air</option>
                        <option value='2'>Anti-armor</option>
                        <option value='3'>Anti-personnel</option>
                        <option value='4'>Anti-structure</option>
                    </select><br/><br/>

                    <label className="labelHeaders">Image link:
                        <input name="threat"
                            type='text'
                            required
                            value={img_url} 
                            onChange={(e) => setImg_url(e.target.value)}/>
                    </label><br/><br/>
                    <button className='submitButton'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddThreat