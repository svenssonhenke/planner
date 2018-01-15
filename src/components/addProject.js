import React from 'react';
import { connect } from 'react-redux';
import { AddProject } from '../redux';


let AddNewProject = ({dispatch}) => {

  return (
    <div className="button">
    <input
      type="text"
      className="addProjectName"
      ref={(input) => {this.nameInput = input}} />
      <input
      type="button"
      className="addButton"
      onClick={e => {
        e.preventDefault()
        this.nameInput.value.length > 0 && dispatch(AddProject(this.nameInput.value))
        this.nameInput.value = ""
      }}
      value="Add" />
    </div>
  )
}

AddNewProject = connect()(AddNewProject);
export default AddNewProject;
