import React, { useState } from "react";
import './Styles.css';

function BookingForm(props){
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [numberOfGuests, setNumberOfGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Submitted!");
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="field">
                        <label htmlFor="date">Choose Date</label>
                        <input type="date" id="date" onChange={(e) => {props.dispatch({type: 'CHANGE_DATE', date: e.target.value})}}/>
                    </div>
                    <div className="field">
                        <label htmlFor="time">Choose Time</label>
                        <select id="time" onChange={(e) => {setDate(e.target.value)}}>
                            {
                                props.availableTimes.map((item) => (
                                    <option value={item}>{item}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="field">
                        <label htmlFor="numberOfGuests">Number of guests</label>
                        <input type="number" id="numberOfGuests" min={1} max={10} placeholder={1} onChange={(e) => {setNumberOfGuests(e.target.value)}}/>
                    </div>
                    <div className="field">
                        <label htmlFor="occasion">Occasion</label>
                        <select id="occasion" onChange={(e) => {setOccasion(e.target.value)}}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </div>
                    <button type="submit">Make your reservation</button>
                </fieldset>
            </form>
        </>
    );
}

export default BookingForm;