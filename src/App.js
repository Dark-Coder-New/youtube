// AIzaSyDC45uM6aJd4rMT-DdrWGOED0v3ZuDjw8g

import React,{useEffect, useState} from 'react';
import SearchBar from "./Components/SearchBar"
import VideoList from "./Components/VideoList"
import VideoPlay from "./Components/VideoPlay"
import './App.css';

const App = () =>{
   let [videos, setVideo] = useState([])
   let [selectedVideo, setSelectedVideo] = useState(null)

  //  console.log("videos",videos)

  useEffect(()=>{
    videos&&
    setSelectedVideo(videos[0])
  }, [videos])


  return(
    <div>
           <SearchBar  addVideo={setVideo}  /> 
           <div className='videos'>
            <VideoPlay  selectedVideo={selectedVideo}/>
            <VideoList videos={videos}  setSelectedVideo={setSelectedVideo}/>
           </div>
           
    </div>
  )
}

export default App;



// function hello(){
//   console.log("hello")
// }

// hii = hello 

// hii()