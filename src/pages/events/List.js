import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EventList from '../../components/container/EventList';


const EventLists = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.event);

  useEffect(() => {
    dispatch({
      type: "EVENT_LIST"
    });
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <>
      <EventList />
    </>
  )

}

export default EventLists;