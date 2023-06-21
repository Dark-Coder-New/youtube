

const VideoList = ({videos,setSelectedVideo}) =>{
   console.log("videos",videos)

    return(
        <div className="videoList">
            {videos.map((video) => {
            return(
                 <div onClick={()=>setSelectedVideo(video)}> 
                      <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title}/>
                 </div>
            )
            })
            }
        </div>
    )
}

export default VideoList;