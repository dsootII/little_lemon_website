import React, { useState } from "react";
import ReservationForm from "./ReservationForm";

import { fetchAPI } from "../../ReservationFakeAPI";
import { useEffect } from "react";
import axios from 'axios';

const ReservationPageMain = () => {

    const allAvailableTimes = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];

    const [date, setDate] = useState('');     //STATE VARIABLE HOLDING THE SELECTED DATE (browser default format: yyyy-mm-dd)
    const [availableTimes, setAvailableTimes] = useState(allAvailableTimes);

    useEffect(() => {

        // const availableTimesNotUnique = fetchAPI(date);
        // const availableTimesUniqueSet = new Set(availableTimesNotUnique);
        // const availableTimesUniqueList = Array.from(availableTimesUniqueSet);
        // setAvailableTimes(availableTimesUniqueList);

        axios.get('https://k808.pythonanywhere.com/api/available?date='+date)
        .then((response)=>{
            console.log("*********AXIOS RESPONSE**********", response.data)
            setAvailableTimes(response.data.available_times)
        })
        .catch(error => console.log("*********AXIOS ERROR**********", error))

    
    }, [date]);


    // const updateTimeList = (date) => fetchAPI(date);

    // // const initializeTimes = () => {
    // //     return fetchAPI(new Date());
    // // }

    // const [availableTimes, dispatch] = useReducer(updateTimeList, allAvailableTimes);

    // console.log("ReservationPage state variables: ", date, availableTimes);

    return (
        <div>
            <ReservationForm availableTimes={availableTimes} date={date} setDate={setDate} />
        </div>
    );
};
 
export default ReservationPageMain;