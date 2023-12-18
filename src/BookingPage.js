import React, { useReducer } from "react";
import './Styles.css';
import BookingForm from "./BookingForm";
import {fetchAPI, submitAPI} from "./api"

export const initializeTimes = () => {
    return fetchAPI(new Date())
};

export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'CHANGE_DATE':
            const date = new Date(action.date);
            return fetchAPI(date);
        default:
            return state;
    }
};

const addBooking = (state, action) => {
    switch (action.type) {
        case 'ADD_BOOKING':
            return [...state, action.bookingData];
        default:
            return state;
    }
}

function BookingPage() {

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const [bookingData, bookingDataDispatch] = useReducer(addBooking, []);

    const submitForm = (formData) => {
        return submitAPI(formData);
    }

    return(
        <>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} bookingData={bookingData} bookingDataDispatch={bookingDataDispatch}/>
        </>
    );
}

export default BookingPage;