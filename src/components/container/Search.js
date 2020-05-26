import React from 'react';
import { useSelector } from 'react-redux';

const Search = ({ onUpdate }) => {
    const { events } = useSelector(state => state.event);
    const onChanges = (event) => {
        let searchText = event.target.value;
        let data = events.filter((val) => {
            let name = val['name'].toLowerCase();
            return name.includes(searchText.toLowerCase());
        });
        onUpdate(data);
    }

    return (
        <div className="search__container">
            <input placeholder="Search Events" type="text" name="search" className="search__container__searchbox" onChange={onChanges} />
        </div>
    )
}

export default Search;