import React from 'react';
import FlagIcon from '../flagIcon/FlagIcon';
import '../upcomingRace/upcomingRace.scss';

const UpcomingRace = ({raceName, countryName, trackName, dateOfRace, trackId, countryId, season}) => {
    
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