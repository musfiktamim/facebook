import Homemainboxtop from "./Homemainboxitems/Homemainboxtop"
import Homaminboxcontenttext from "./Homemainboxitems/Homaminboxcontenttext"
import Homemainboximage from "./Homemainboxitems/Homemainboximage"
import HomemainboxFooter from "./Homemainboxitems/HomemainboxFooter"


function Homemainbox({items,users,user}) {
    // 450
 return (
    <div className="w-[350px] h-auto border-[1px] m-auto shadow-lg bg-white  rounded-md mb-2">
      <Homemainboxtop items={items} user={user} users={users}/>
      <Homaminboxcontenttext title={items.title} />
      <Homemainboximage contents={items.content}/>
      <HomemainboxFooter postId={items._id} users={users} items={items} like={items.like} comment={items.comment} />
    </div>
  )
}

export default Homemainbox
