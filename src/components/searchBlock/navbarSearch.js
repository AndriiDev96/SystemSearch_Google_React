import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Navigation from '../listNavigation/navigation';

const DEFAULT_AVATAR = "/img/Avatar/blank-profile.png";

const NavbarSearch = (props) => {
  const imageLink = props.user.avatar ? props.user.avatar : DEFAULT_AVATAR;

  return (
    <div className="jumbotron">
      <div className="row ">
        <div className="logo col-1">
          <img src="/img/Google_logo.png" alt="logo" />
        </div>
        <div className="col-6">
          <div className="wrapper-block-search">
            <div className="wrapper-input">
              <input type="text" className="form-control" value="helloween" />
            </div>
            <div className="enter-and-search">
              <div className="keyboard">
                <span className="btn-keyboard">
                  <img src="/img/tia.png" alt="tia" />
                </span>
              </div>
              <div className="voice-search-button">
                <span className="btn-voice-search">
                  <img src="/img/voise_search.png" alt="voice" />
                </span>
              </div>
              <button type="button">
                <span className="btn-search">
                  <img src="/img/searching.png" alt="tia" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="google-extension col-5">
          <div className="aplication-google">
            <a className="application" role="button" href="https://www.google.com.ua/intl/uk/about/products/?tab=wh"> </a>
            <a className="notification" role="button" href="!#">
              <div className="icon-notification"></div>
            </a>
            <a href="#!">
              <img className="avatar" src={imageLink} alt="Avatar" />
            </a>
          </div>
        </div>
      </div>

      <Navigation />

    </div>
  )
}

export default NavbarSearch;