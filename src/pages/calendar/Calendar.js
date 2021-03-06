import React from 'react';
import './calendar.scss';
import dataJSON from '../../test.json'
import UpcomingRace from '../../components/upcomingRace/UpcomingRace';

const Calendar = () => {

    // const fetchData = () => {

    //     const baseURL = process.env.REACT_APP_UPCOMING_CHANGES;
    //     fetch(baseURL, {
    //         mode: 'no-cors'
    //     })
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.error(error));
    // }

    // fetchData()

    const data = dataJSON;

    const upcomingRaces = data.map((race, index) => (
        <UpcomingRace 
            key = {index}
            raceName = {race.raceName}
            dateOfRace = {race.dateOfRace}
            countryName = {race.countryName}
            trackName = {race.trackName}
            trackId = {race.trackId}
            countryId = {race.countryId}
            season = {race.season}
        />
    ))

    return(
        <>
            <section className='calendar-main'>
                <header className='calendar-header'>
                    <h1>Upcoming races</h1>
                </header>
                <div className='upcoming-races-container'>
                    {upcomingRaces}
                </div>
            </section>
        </>
    )
}

export default Calendar;