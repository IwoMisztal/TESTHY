import {UPDATE_TILE, TOGGLE_LOCK_TILE, GET_TILES} from './../constants/action-types';

export function addTileElement(payload) {
    return {type: GET_TILES, payload}
}

export function toggleLockTile(payload) {
    return {type: TOGGLE_LOCK_TILE, payload}
}

export function updateTile(payload) {
    return {type: UPDATE_TILE, payload}
}