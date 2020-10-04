import React, { useState, useEffect } from 'react';
import '../styles/Header.scss'

const CurrentHour = () => {

  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const currentTime = () => {
      setTime(new Date().toLocaleTimeString())
    }
    setInterval(() => currentTime(), 1000)

  }, []);

  return (
    <p className='time'>{time}</p>
  )
}


export default CurrentHour;