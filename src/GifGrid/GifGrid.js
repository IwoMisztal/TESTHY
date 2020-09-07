import React from 'react';
import GifTile from './GifTile';
import { connect } from "react-redux";
import './GifGrid.scss';

function GifGrid(props) {
    return (
        <div className="gif-grid">
            {props.gridElements.length &&
                props.gridElements.map((tile, i) => {
                    return <GifTile gifElementModel={tile} key={i} />
                })}
        </div>
    ); 
}

const mapStateToProps = state => {
    return {gridElements: state.gifTiles}
}

export default connect(mapStateToProps)(GifGrid);
