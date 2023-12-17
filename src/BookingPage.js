import React, { useEffect, useReducer, useState } from "react";
import './Styles.css';
import BookingForm from "./BookingForm";
import {fetchAPI, submitAPI} from "./api"

function BookingPage() {
    const initializeTimes = () => {
        return fetchAPI(new Date())
    };

    const updateTimes = (state, action) => {
        switch (action.type) {
            case 'CHANGE_DATE':
                const date = new Date(action.date);
                console.log(action.date);
                return fetchAPI(date);
            default:
                return state;
        }
    };

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return(
        <>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
        </>
    );
}

export default BookingPage;