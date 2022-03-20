import React from 'react';
import '../upcomingRace/upcomingRace.scss';
import FlagIcon from '../flagIcon/FlagIcon';
import { FaFlagCheckered } from 'react-icons/fa';

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

                <span>
                    <FaFlagCheckered/> {trackName}
                </span>

                <img className='track-img' src={`/assets/img/tracks/${trackId}.png`} alt="track"/>
                
            </section>
        </>
    )
}

export default UpcomingRace;