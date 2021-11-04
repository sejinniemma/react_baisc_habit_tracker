import { useEffect, useState } from 'react'
import './app.css'
import VideoList from './components/video_list/video_list';
import React from 'react'

function App() {
  const [videos, setVideos] = useState([]);
console.log(videos)
  useEffect(()=>{

    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCZ6t-whXlyEcmCNGrOk-6f7WVRGCCaQsM", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[]);
  return <VideoList videos={videos}/>
}

export default App
