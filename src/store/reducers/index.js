import { GET_TILES, TOGGLE_LOCK_TILE, REFRESH_TILES, UPDATE_TILE } from "../constants/action-types";
import {GifElementModel} from './../../Models/GifElementModel';

const getInitialGifTiles = () => {
    if (!window.localStorage.getItem('gifs')) {
        const gifs = []
        for (let i = 0; i < 12; i++) {
            gifs.push(new GifElementModel('', i, false))
        }
        window.localStorage.setItem('gifs', JSON.stringify(gifs));
    }
    return JSON.parse(window.localStorage.getItem('gifs'));
}

const initialState = {
    gifTiles: getInitialGifTiles(),
    refreshTiles: false,
};
  
function rootReducer(state = initialState, action) {
    if (action.type === GET_TILES) {
        return {...state, gifTiles: action.payload}
    }
    if (action.type === TOGGLE_LOCK_TILE) {
        const newGifTiles = state.gifTiles.map(el => el.position === action.payload.position ? {...el, isLocked: !el.isLocked} : el );
        window.localStorage.setItem('gifs', JSON.stringify(newGifTiles));
        return {...state, gifTiles: newGifTiles}
    }
    if (action.type === REFRESH_TILES) {
        return {...state, refreshTiles: !state.refreshTiles}
    }
    if (action.type === UPDATE_TILE) {
        const newGifTiles = state.gifTiles.map(el => el.position === action.payload.position ? {...el, url: action.payload.url} : el );
        window.localStorage.setItem('gifs', JSON.stringify(newGifTiles));
        return {...state, gifTiles: newGifTiles}
    }
    return state;
};

export default rootReducer;