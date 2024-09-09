import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Homemainboximage({contents}) {
  // console.log(contents)
  function VIF(data,index){
    if(data.contenttype.includes("image")){
      return <img key={index} className="max-h-[340px]" src={"http://localhost:8000/postimage/"+data.contents} />
    }else if(data.contenttype.includes("video")){
      return <video key={index} className="max-h-[340px]" src={"http://localhost:8000/postimage/"+data.contents} controls/>
    }else{
      console.log("hey")
    }
  }
  
  return (
    <div className="max-h-[340px] mb-2 border-b-[1px] border-black flex items-center justify-center">
        <Carousel showThumbs={false} showIndicators={contents.length!=1?true:false} showArrows={contents.length!=1?true:false} swipeable={true} >
            {
              contents.map((items,index)=>VIF(items,index))
            }
        </Carousel>
    </div>
  )
}

export default Homemainboximage
