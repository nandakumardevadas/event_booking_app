import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import _ from "lodash";
import Input from '../core/Input';
import Dropdown from '../core/Dropdown';
import ValidateHelper from '../../utils/validateHelpers';
import {RequiredValidation} from '../../utils/validators/validation';
import BookingFormValidator from '../../utils/validators/rules/bookingForm';

const BookingForm = ({ eventDetail, onBooking }) => {
    const [errors, setError] = useState({});
    const [isValid, setValid] = useState(false);
    const [inputs, setInputs] = useState([]);
    const optionsRange = _.range(1, 7);
    const options = _.zipObject(optionsRange, optionsRange);

    const handleSubmit = (event) => {
        event.preventDefault();
        let validateHelper = new ValidateHelper(BookingFormValidator);
        let { errors, isFormValid, formDetails } = validateHelper.validateForm(event.target);
        setError(errors);
        if (isFormValid) {
            setValid(true);
            onBooking({
                message: "Tickets Booked succesfully",
                data: JSON.stringify(formDetails)
            });
        }
    }

    const addAttendeeValidator = (name) => {
        BookingFormValidator[name] = {
            rules: [
                {
                    test: (value) => {
                        return RequiredValidation(value);
                    },
                    message: 'Please enter the name of Attendee',
                },
            ],
            errors: [],
            valid: false,
            value: ''
        }
    }

    const addBookingSeatsValidator = (name) => {
        BookingFormValidator[name] = {
            rules: [
                {
                    test: (value) => {
                        return parseInt(value) <= eventDetail.seats;
                    },
                    message: 'Number of seats selected is more than available seats',
                },
            ],
            errors: [],
            valid: false,
            value: ''
        }
    }

    const addNewAttendee = (event) => {
        let noOfAttendees = event.target.value;
        let data = [];
        if (parseInt(noOfAttendees) > 1) {
            for (let i = 0; i < parseInt(noOfAttendees) - 1; i++) {
                var attendeeNo = `input-${inputs.length}`;
                data.push([attendeeNo]);
                addAttendeeValidator(attendeeNo);
            }
        }
        setInputs(data);
    }
    useEffect(() => {
        addBookingSeatsValidator('no_of_seats');
    }, [])

    return (
        <div className="details__booking__form">
            <form onSubmit={handleSubmit}>
                <Input name="username" label="Name" className="username" errors={errors} />
                <Input name="email" label="Email" className="email" errors={errors} />
                <Input name="phone_no" label="Phone no" className="phone_no" errors={errors} />
                <Dropdown name="no_of_seats" label="No of Seats" className="no_of_seats" options={options} errors={errors} onChange={addNewAttendee} />
                {inputs.map((input, key) => {
                    return (
                        <Input key={key} name={input} label={`Name of attendee #${key+1}`} className={input} errors={errors} />
                    )
                })}
                <div className="details__booking__form__buttons">
                    <button type="submit" className="submit" disabled={isValid}
                    >Submit</button>
                    <Link to={`/events`} ><button className="cancel" disabled={isValid}>Cancel</button></Link>
                </div>
            </form>
        </div>
    )
}

export default BookingForm;