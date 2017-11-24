
import React, { Component } from 'react';
import Project from './project';
export default class ProjectList extends React.Component {

    constructor(props, context){
        super(props, context);

        this.state = {
            projects: [
                {
                    name: "Project1",
                    songList: [
                        {name: "song1"},
                        {name: "song2"},
                        {name: "song3"},
                        {name: "song4"}
                    ]
                },
                {
                    name: "Project2",
                    songList: [
                        {name: "song10"},
                        {name: "song20"},
                        {name: "song30"},
                        {name: "song40"}
                    ]
                },
                {
                    name: "Project3",
                    songList: [
                        {name: "song1"},
                        {name: "song2"},
                        {name: "song3"},
                        {name: "song4"},
                        {name: "song3"},
                        {name: "song4"}
                    ]
                },
                {
                    name: "Project4",
                    songList: [
                        {name: "song10"},
                        {name: "song20"}
                    ]
                }
            ]
        };
    }

    createList(list) {
        var projectList = list.map((project) => {
        return (
        <li className="column" key={project.name}>
            <Project name={project.name} songList={project.songList} />
            </li>)
        });
        return projectList;
    }

    render() {
        return (
            <div className="project-list">
                    <div className="grid-12">
                        <ol className="columns columns-4-desktop columns-2-tablet columns-1-mobile">
                            {this.createList(this.state.projects)}
                        </ol>
                    </div>
            </div>
        );
    }
};
