import React, { Component } from 'react';
import Song from './song';
export default class SongList extends Component {

    createList(list) {
        var songList = list.map((song, index) => {
        return (<li key={index}><Song name={song.name} /></li>)
        });
        return songList;
    }

    render() {
        return (
            <div className="list">
                <h4>Tracks</h4>
                <ul>{this.createList(this.props.list)}</ul>
            </div>
        );
    }
};
