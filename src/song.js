import React, { Component } from 'react';

export default class Song extends React.Component {

    constructor(props, context){
        super(props, context);

        // state with tasks and their progress

    }

    render() {
        return (
            <div className="song">
                {this.props.name}
            </div>
        );
    }
};