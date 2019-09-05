import React from 'react'
import Clock, { ClockFunc } from './Clock'

export default () => {
    
    return(
        <div>
            <Clock change={ date => console.log(date.toLocaleTimeString()) } />
            <ClockFunc />
        </div>
    )
}