import React from "react";
import countryJSON from '../../countries.json';

// Returns flag if country name exist
const FlagIcon = (props) => {
    
    const countryName = props.countryName;
    let countrySymbol = "";

    countryJSON.forEach(country => {

        if (
            country.name.toLowerCase() === 
            countryName.toLowerCase()
        ){
            countrySymbol = country.code.toLowerCase();
        }
    })

    return(
        <>
            {countrySymbol !== "" ? 
                <img className="flag-icon" src={`/assets/img/flags/${countrySymbol}.svg`} alt="flag icon"/> : ""
            }
            
        </>
    )
}

export default FlagIcon;