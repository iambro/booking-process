import React from 'react'

const ContentBoxAdditional = (props) => {
    const {content, form} = props;
    let passengersNumber, passengersText;
    let bagsNumber;

    if(form.passengers === 1){
        passengersNumber = `${form.passengers}`;
        passengersText = `${content.passenger}`;
    } else {
        passengersNumber = `1-${form.passengers}`;
        passengersText = `${content.passengers}`;
    }

    if((form.luggage + form.sportLuggage) <= 2){
        bagsNumber = '1-2';
    } else {
        bagsNumber = `1-${form.luggage + form.sportLuggage}`
    }

    
    return (
    <p className="form-advanced-decription-text">
    {`${content.for} ${passengersNumber} ${passengersText} ${bagsNumber} ${content.bags}`}
    </p>
    );
}
 
export {ContentBoxAdditional};