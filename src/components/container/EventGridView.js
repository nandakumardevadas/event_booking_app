import React from 'react';
import { Link } from "react-router-dom";
import Booknow from '../../assets/img/book_now.png';
import Sold from '../../assets/img/sold.png';
import Event from '../../assets/img/summer.png';


const EventGridView = ({ event }) => {
    return (
        <>
            <div className="list__blocks">
                <h3 className="list__blocks__title">{event.name}</h3>
                <div className="list__blocks__details">
                    <div className="list__blocks__details__profile">
                        {/* Images are hardcoded since many valid images are not available */}
                        {/* <img src={Event} alt={event.image} /> */}
                        <img src={event.image} alt={event.image}/>
                    </div>
                    <div className="list__blocks__details__summary">
                        <span>{event.date}</span>
                        <span>Available: {event.seats}</span>
                        {(event.seats == 0) ? <img src={Sold}></img> : <Link to={`/event/${event.id}`} ><img src={Booknow}></img></Link>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventGridView;