import React,{ useEffect, useState, useCallback } from 'react';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/videoList/video_list';
import styles from './app.module.css'
import VideoDetail from './components/video_detail/video_detail';

function App({ youtube }) {
  const [videos , setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const seletVideo = useCallback(
    (video) => {
      setSelectedVideo(video);
    },[youtube]
  )

  const logoClick = useCallback(
    (state) => {
      setSelectedVideo(state)
    },[youtube]
  )

  const search =  useCallback(
    (query) => {
      logoClick(null);
      youtube.search(query).then(videos => 
        setVideos(videos));
    },
    [youtube],
  )
  

  useEffect(() => {
      youtube.mostPopular().then(videos => setVideos(videos));
  }, [youtube])

  return (
    <div className={styles.app}>
        <SearchHeader onSearch={search} onLogoClick={logoClick} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo}/>
          </div>
          )}
      <div className={styles.list}>
        <VideoList videos={videos} onVideoClick={seletVideo} 
        display={selectedVideo? 'list' : 'flex'}/>
      </div>
    </section>
    </div>
  );
}

export default App;
