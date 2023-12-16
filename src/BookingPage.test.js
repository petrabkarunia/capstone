import BookingForm from "./BookingForm"
import {render, screen, fireEvent} from "@testing-library/react"
import BookingPage from "./BookingPage";

test('Renders the BookingForm label for date', () => {
    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    render(<BookingForm availableTimes={availableTimes}/>);
    const dateLabel = screen.getByText("Choose Date");
    expect(dateLabel).toBeInTheDocument();
})

test('User can submit the form', () => {
    global.alert = jest.fn();

    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const {getByText, getByLabelText} = render(<BookingForm availableTimes={availableTimes}/>);
    const submitButton = getByText('Make your reservation');

    fireEvent.click(submitButton);

    expect(global.alert).toHaveBeenCalledWith('Submitted!');
})