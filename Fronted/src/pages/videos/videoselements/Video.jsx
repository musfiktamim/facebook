import VideoDiv from "./VideoBox/VideoDiv"

function Video() {
  const videos = [
    {
        "id":1,
        "title":"my videos",
        "img" : "./public/mypicture.jpg",
        "video":"./public/video.mp4"
    }
  ]
  
  return (
    <div className="h-[85%] mt-4 ml-3 overflow-y-auto flex gap-2 flex-wrap justify-center absolute md:left-[250px]">
      {
        videos.map((items)=>(
          <VideoDiv itemsdata={items} key={items.id} />

        ))
      }
    </div>
  )
}

export default Video
