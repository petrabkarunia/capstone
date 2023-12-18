import BookingForm from "./BookingForm"
import {render, screen, fireEvent} from "@testing-library/react"
import {initializeTimes, updateTimes} from "./BookingPage";
import { MemoryRouter } from "react-router-dom";

test('Renders the BookingForm label for date', () => {
    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    render(<MemoryRouter><BookingForm availableTimes={availableTimes}/></MemoryRouter>);
    const dateLabel = screen.getByText("Choose Date");
    expect(dateLabel).toBeInTheDocument();
})

test('FetchAPI function returns a non-empty array', () => {
    expect(initializeTimes().length).toBeGreaterThan(0);
})

test('updateTimes will return different times based on selected date', () => {
    const initialTimes = ["17:00", "18:00"];
    expect(updateTimes(initialTimes, {type: 'CHANGE_DATE', date: '12/12/2024'}).length).toBeGreaterThan(2);
});

test('Date validation works as expected', () => {
    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const {getByLabelText, getByText} = render(<MemoryRouter><BookingForm availableTimes={availableTimes} /></MemoryRouter>);
    
    const dateInput = getByLabelText('Choose Date');
    dateInput.focus();
    dateInput.blur();

    const submitButton = getByText('Make your reservation');
    expect(submitButton).toBeDisabled();
});