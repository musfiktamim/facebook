import React from 'react'
import {useLocation} from "react-router-dom"
import {VideoPlayer} from "6pp"

function Videoplayer() {
    const {state} = useLocation()
    console.log(state.video)
  return (
    <div className=''>
        <video src={state.video} />
    </div>
  )
}

export default Videoplayer
