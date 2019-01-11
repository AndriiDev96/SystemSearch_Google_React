import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class OneVideo extends Component {

  render() {
    const videoYouTube = <iframe src={this.props.video.src} title="Video YouTube" />;

    return (
      <>
        {videoYouTube}
        <div className="card-body">
          <h5 className="card-title">
            {this.props.video.title}
          </h5>
        </div>
        <div className="card-footer">
          <div className="topic">
            {this.props.video.topic}
          </div>
          <div className="source-and-date">
            <h5>
              <span>YouTube</span> - {this.props.video.date}
            </h5>
          </div>
        </div>
      </>
    );
  }
}

export default OneVideo;