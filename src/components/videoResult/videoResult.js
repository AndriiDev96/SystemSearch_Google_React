import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import OneVideo from '../renderOneVideo/oneVideo';
import ResGoogleVideo from '../responseGoogleVideo';

class VideoResult extends Component{

  render(){
    let renderVideo = ResGoogleVideo.map((video) => 
      <div key = {video.id} className="card">
        <OneVideo video = {video} />
      </div>
    );

    return (
      <section className="section-videos mb-4">
        <h3>Відео</h3>
        <div className="card-deck">
          { renderVideo }
        </div>
      </section>
    );
  }
}


export default VideoResult;
