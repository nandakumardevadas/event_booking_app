import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Search from './Search';
import EventGridView from './EventGridView';


const EventList = () => {
    const { events } = useSelector(state => state.event);
    const [eventList, setEventList] = useState(events);
    const onfilteredItems = (data) => {
        setEventList(data);
    }
    return (
        <>
            <div className="list_container">
                <Search onUpdate={onfilteredItems} />
                <div className="list">
                    { !eventList || eventList.length === 0 ? <span className="list__notfound">No Records found</span> :
                        eventList.map((event, key) => {
                            return (
                                <>
                                    <EventGridView event={event} />
                                </>
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default EventList;