import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styles from './styles.module.css';

export default function Videos({ videos }) {
  const displayVideoSelector = videos.length > 1;
  const [activeVideo, setActiveVideo] = useState(videos[0].url);
  return (
    <div className={styles.container}>
      <div className={styles.fixedAspectContainer}>
        <ReactPlayer
          className={styles.player}
          url={activeVideo}
          width="100%"
          height="100%"
        />
      </div>
      {displayVideoSelector && (
        <div className={styles.selector}>
          {videos.map((video, i) => (
            <img
              key={i}
              src={video.image}
              onClick={() => setActiveVideo(video.url)}
              alt="Video thumbnail"
              className={`${styles.image} ${
                activeVideo === video.url ? styles.selected : ''
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
