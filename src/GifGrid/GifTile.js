import React from 'react';
import './GifTile.scss'
import {getUrlByEndpoint} from '../ApiHelper';
import { connect } from "react-redux";
import {UPDATE_TILE, TOGGLE_LOCK_TILE} from './../store/constants/action-types';

function GifTile(props) {

    React.useEffect(() => {
        setNewGif();
    }, [props.refreshTiles])


    function setNewGif() {
        if (props.gifElementModel.isLocked) {
            return;
        }
        const url = getUrlByEndpoint('random');
        fetch(url)
            .then(res => res.json())
            .then(result => {
                const gifUrl = result.data.images.downsized_medium.url 
                const newCurrentTile = {...props.gifElementModel, url: gifUrl}
                props.dispatch({type: UPDATE_TILE, payload: newCurrentTile});
        })
    }

    function toggleLockGif() {
        props.dispatch({
            type: TOGGLE_LOCK_TILE,
            payload: props.gifElementModel
        })
    }

    return (
        <div className="gif-tile" onClick={toggleLockGif}>
            {props.gifElementModel &&
               <img src={props.gifElementModel.url} 
                    alt="Gif image" 
                    className={"gif-image " + (props.gifElementModel.isLocked && 'locked')} />
            }
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
      dispatch
    }
}

const mapStateToProps = state => {
    return {gridElements: state.gifTiles,
            refreshTiles: state.refreshTiles}
}

export default connect(mapStateToProps, mapDispatchToProps)(GifTile);
