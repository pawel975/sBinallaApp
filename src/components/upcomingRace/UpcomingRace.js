import React from 'react';
import '../upcomingRace/upcomingRace.scss'

const UpcomingRace = (props) => {

    const raceName = props.raceName;
    const countryName = props.countryName;
    const trackName = props.trackName;
    const dateOfRace = props.dateOfRace;
    const trackId = props.trackId
    const countryId = props.countryId
    const season = props.season

    return(
        <>
            <section id="upcoming-race-card">
                <header>
                    <h2>{raceName}</h2>
                    <p>{dateOfRace}</p>
                </header>
                <hr></hr>
                <p>{countryName}</p>
                <p>{trackName}</p>
                <img src={`/assets/img/tracks/${trackId}.png`} alt="track"/>
            </section>
        </>
    )
}

export default UpcomingRace;