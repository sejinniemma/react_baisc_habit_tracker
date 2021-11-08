import React from 'react'

const VideoItem = (props) => {
    return (
        <li>
        <h1>{props.video.snippet.title}</h1>
        <img src={props.video.snippet.thumbnails.medium.url} alt="" />
        </li>
        )
}
export default VideoItem;