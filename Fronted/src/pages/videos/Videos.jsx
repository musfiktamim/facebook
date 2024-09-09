import { useEffect } from "react"
import Video from "./videoselements/Video"
import Videonav from "./videoselements/Videonav"
import {HashRouter} from "react-router-dom"


function Videos() {
  
  
  return (
      <div className='h-[89vh] flex bg-[#F0F2F5] overflow-y-auto'>
        <Videonav />
        <Video />
      </div>
  )
}

export default Videos
