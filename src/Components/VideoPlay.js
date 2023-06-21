
import React from "react";

const VideoPlay = ({selectedVideo}) => {



    return (
        <div className="videoPlay">
            { selectedVideo &&
              <iframe width="560" height="315" src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`} title="YouTube video player"></iframe>
            }
        </div>

    )
}

export default VideoPlay;