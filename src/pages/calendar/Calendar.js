import React from 'react';
import './calendar.scss';
import dataJSON from '../../test.json'

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
    console.log(data)

    return(
        <>
            <section>
                <header>
                    <h1>Upcoming races</h1>
                </header>
            </section>
        </>
    )
}

export default Calendar;