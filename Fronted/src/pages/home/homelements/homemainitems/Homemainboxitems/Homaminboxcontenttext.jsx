import { useState } from "react"

function Homaminboxcontenttext({title}) {
  const [parashow,setParashow] = useState(false)
  const lorem = title==null?"":title
  return (
    <div className="h-auto mb-2" onClick={()=>setParashow(!parashow)}>
        <p className="text-sm hover:cursor-pointer">
          {parashow?lorem:lorem.slice(0,210)}
          {lorem.length>210? !parashow?" ...":null :null}
        </p>
    </div>
  )
}

export default Homaminboxcontenttext
