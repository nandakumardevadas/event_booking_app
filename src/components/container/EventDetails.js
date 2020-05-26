import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import BookingForm from './BookingForm';
import Event from '../../assets/img/summer.png';


const EventDetails = () => {
    const dispatch = useDispatch();
    const { events, isLoading } = useSelector(state => state.event);
    const [eventDetail, setEventDetail] = useState(null);
    const [bookingStatus, setBookingstatus] = useState('');
    let { id } = useParams();

    useEffect(() => {
        if (events) {
            if (events.length == 0) {
                dispatch({
                    type: "EVENT_LIST"
                });
            }
            let data = events.find((val) => {
                return val['id'] == id;
            });
            setEventDetail(data);
        }
    }, [events])

    const onSucessBooking = (data) => {
        setBookingstatus(data);
    }
    if (isLoading) {
        return <div className="loading">Loading...</div>;
    }
    return (
        <>
            {(!eventDetail || eventDetail.seats == 0) ? <span className="notfound">No Records found</span> :
                <div className="details">
                    <div className="details__summary">
                        <h2>{eventDetail.name}</h2>
                        <h3>No of seats available: {eventDetail.seats}</h3>
                    </div>
                    <div className="details__booking">
                        <div className="profile">
                            {/* <img src={Event} alt={eventDetail.image}></img> */}
                            <img src={eventDetail.image} alt={eventDetail.image}></img>

                        </div>
                        {(eventDetail.seats != 0) && <BookingForm eventDetail={eventDetail} onBooking={onSucessBooking} />}
                    </div>

                        { bookingStatus &&
                            <div className="details--success">
                            { Object.keys(bookingStatus).map((value, key) => {
                                return <span>{ bookingStatus[value] }</span>
                            }) }
                            </div>
                        }    
                </div>
            }
        </>
    )
}

export default EventDetails;