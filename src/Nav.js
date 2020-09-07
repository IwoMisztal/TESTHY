import React from 'react';
import './Nav.scss';
import { connect } from "react-redux";
import infoIcon from './assets/info.svg';
import {REFRESH_TILES} from './store/constants/action-types'

function Nav(props) {

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeydown, false);
    return () => {
      document.removeEventListener('keydown', handleKeydown, false);
    }
  }, [])

  function refreshTiles() {
    props.dispatch({
      type: REFRESH_TILES,
      payload: null
    })
  }

  function handleKeydown(e) {
     if (e.keyCode === 32) {
        e.preventDefault();
        refreshTiles();
     }
  }

  return (
    <nav>
      <div>
        <span className="logo">TESTHY</span>
      </div>
      <div className="nav__info">
        <img src={infoIcon} alt="Info icon"/>
        <p>Press <span className="nav__info--highlighted">spacebar</span> to shuffle or </p>
        <button className="refresh-button" onClick={refreshTiles}>Click here</button>
      </div>
    </nav>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(null, mapDispatchToProps)(Nav)
