import React from "react";
import './home.scss';

import dataJSON from '../../test.json'
import dataJSONlastRace from '../../test-last-race.json'
import UpcomingRace from "../../components/upcomingRace/UpcomingRace";
import LastRace from "../../components/lastRace/LastRace"

const Home = () => {

    const nextRaceInfo = dataJSON[0]
    const lastRaceInfo = dataJSONlastRace[0]

    return(
        <>
            <h1>Home</h1>
            <div className="home-main">
                <div
                className="home-yt-video"
                >
                </div>
                <div
                className="home-info"
                >
                    <div
                    className="info-last-race-cnt"
                    >
                        <h2>Last Race</h2>
                        <LastRace 
                            raceName = {lastRaceInfo.raceName}
                            dateOfRace = {lastRaceInfo.dateOfRace}
                            countryName = {lastRaceInfo.countryName}
                            trackName = {lastRaceInfo.trackName}
                            trackId = {lastRaceInfo.trackId}
                            countryId = {lastRaceInfo.countryId}
                            season = {lastRaceInfo.season}
                        />
                    </div>
                    <div
                    className="info-next-race-cnt"
                    >
                        <h2>Next Race</h2>
                        <UpcomingRace 
                            raceName = {nextRaceInfo.raceName}
                            dateOfRace = {nextRaceInfo.dateOfRace}
                            countryName = {nextRaceInfo.countryName}
                            trackName = {nextRaceInfo.trackName}
                            trackId = {nextRaceInfo.trackId}
                            countryId = {nextRaceInfo.countryId}
                            season = {nextRaceInfo.season}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;