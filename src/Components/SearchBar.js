import React,{useState,useEffect} from "react"
import axios from "axios"


// process.env.REACT_APP_YOUTUBE_KEY

const SearchBar = ({addVideo}) =>{
    let [searchBar, setSearchBar] =  useState("")
   

    // console.log(process.env.REACT_APP_YOUTUBE_KEY)

     useEffect(()=>{
        handleSearchBar()
     },[])

    function handleSearchBar() {

        axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
                key : process.env.REACT_APP_YOUTUBE_KEY,
                part : "snippet",
                maxResults : 5,
                q : searchBar,
                type : "video"
            }
        })
        .then(res => addVideo(res.data.items))
        .catch(err => console.log(err))


    }


    return(
        <div>
            <input type="text" placeholder="Search" 
               onChange={(e) => setSearchBar(e.target.value)}
            />
            <button
             onClick={handleSearchBar}
            >Search</button>
        </div>
    )
}

export default SearchBar;