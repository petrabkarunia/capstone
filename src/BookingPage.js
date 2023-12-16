import React, { useReducer } from "react";
import './Styles.css';
import BookingForm from "./BookingForm";

function BookingPage() {
    const updateTimes = (state, action) => {
        return state;
    };

    const initializeTimes = () => {
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    };

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return(
        <>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
        </>
    );
}

export default BookingPage;