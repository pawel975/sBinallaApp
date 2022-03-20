import React from 'react'

import RaceResultsData from '../../test-last-race-results.json'

import "./LastRaceResults.scss"

const LastRaceResults = () => {

    const lastRaceResults = RaceResultsData.slice(0, 5)

  return (
    <div
        className="last-race-results-cnt"
    >
        <h3>Results</h3>
        <hr/>
        <table
            className="results-table"
        >
            <tr className="result-desc">
                <td></td>
                <td>Name</td>
                <td>Time</td>
                <td>Best Lap</td>
                <td>Grid</td>
            </tr>
            {lastRaceResults.map((item, index) => {
                return (
                    <tr className="results" key={item.playerId}>
                        <td>{item.position}</td>
                        <td>{item.playerName}</td>
                        <td style={{color: `${index === 0 ? "lightGreen": "red"}`}}>{item.time}</td>
                        <td>{item.bestLap}</td>
                        <td>{item.grid}</td>
                    </tr>
                )
            })}
        </table>

    </div>
  )
}

export default LastRaceResults