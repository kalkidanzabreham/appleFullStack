import React, { useEffect, useState } from 'react'
import "./Youtube.css"
import YT2 from './YT2';
const API_KEY = import.meta.env.VITE_API_KEY;
function Youtube() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=searchSortUnspecified&key=${API_KEY}&videoType=any`
    )
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.items);
        console.log(data.items);
      });


      
  },[]);
  console.log(videos);
   return (
     <YT2 video = {videos}/>
    );
  
}

export default Youtube