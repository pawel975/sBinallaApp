import React from 'react';
import FlagIcon from '../flagIcon/FlagIcon';
import '../upcomingRace/upcomingRace.scss';

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
            <section className="upcoming-race-card">

                <header>
                    <h2>{raceName}</h2>
                    <p>{dateOfRace}</p>
                </header>

                <hr></hr>

                <span>
                    <FlagIcon countryName={countryName}/> {countryName}
                </span>

                <span>{trackName}</span>

                <img className='track-img' src={`/assets/img/tracks/${trackId}.png`} alt="track"/>
                
            </section>
        </>
    )
}

export default UpcomingRace;