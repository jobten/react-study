import React from 'react'
import Clock from './Clock'

export default () => {
    
    return(
        <div>
            <Clock change={ date => console.log(date.toLocaleTimeString()) } />
        </div>
    )
}