import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Styles.css';

function BookingForm(props){
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    const [numberOfGuests, setNumberOfGuests] = useState(0);
    const [occasion, setOccasion] = useState("birthday");

    const navigation = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {date: date, time: time, numberOfGuests: numberOfGuests, occasion: occasion};
        if (props.submitForm(formData) === true) {
            props.bookingDataDispatch({type: 'ADD_BOOKING', bookingData: formData});
            localStorage.setItem('bookingData', JSON.stringify(props.bookingData));
            console.log(props.bookingData);

            // how to make this navigation is called afer the dispatch is completely called
            // navigation('/confirmed-booking');
        }
    };

    const validateDate = () => {
        const dateInput = document.getElementById('date');
        const submitButton = document.getElementById('submit');

        if(dateInput.value == '') {
            submitButton.disabled = true;
        } else {
            submitButton.disabled = false;
        }
    };

    window.onload = function() {
        validateDate();
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="field"> 
                        <label htmlFor="date">Choose Date</label>
                        <input type="date" id="date" onChange={(e) => {setDate(e.target.value); props.dispatch({type: 'CHANGE_DATE', date: e.target.value})}} required onInput={validateDate} onBlur={validateDate}/>
                    </div>
                    <div className="field">
                        <label htmlFor="time">Choose Time</label>
                        <select id="time" onChange={(e) => {setTime(e.target.value)}} required>
                            {
                                props.availableTimes.map((item) => (
                                    <option value={item} key={item}>{item}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="field">
                        <label htmlFor="numberOfGuests">Number of guests</label>
                        <input type="number" id="numberOfGuests" min={1} max={10} required placeholder={1} onChange={(e) => {setNumberOfGuests(e.target.value)}}/>
                    </div>
                    <div className="field">
                        <label htmlFor="occasion">Occasion</label>
                        <select id="occasion" onChange={(e) => {setOccasion(e.target.value)}} required>
                            <option value='birthday'>Birthday</option>
                            <option value='anniversary'>Anniversary</option>
                        </select>
                    </div>
                    <button type="submit" id='submit' role='button'>Make your reservation</button>
                </fieldset>
            </form>
        </>
    );
}

export default BookingForm;