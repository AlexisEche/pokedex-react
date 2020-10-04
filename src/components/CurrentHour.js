import React, { useState, useEffect } from 'react';
const CurrentHour = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const currentTime = () => {
            setTime(new Date().toLocaleTimeString())
        }
        setInterval(() => currentTime(), 1000)

    }, []);
    return (
        <>
            <div id='navbar'>
                <p>{time}</p>
            </div>
        </>
    )
}


export default CurrentHour;