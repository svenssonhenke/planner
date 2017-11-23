import React, { Component } from 'react';

export default class Song extends React.Component {
    render() {
        return (
            <div className="song">
                {this.props.name}
            </div>
        );
    }
};