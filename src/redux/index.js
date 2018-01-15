import {
    applyMiddleware,
    combineReducers,
    createStore,
  } from 'redux';

import api from '../api';

export const ADD_PROJECT = "ADD_PROJECT";
export const ADD_SONG = "ADD_SONG";

  //actions.js
  export const initState = state => ({
    type: 'INIT',
    state
  });

  export const AddProject = projectName => ({
    type: ADD_PROJECT,
    payload: projectName
  });

  export const SetFetchedState = fetchedState => ({
    type: 'DATA_LOAD_COMPLETE',
    payload: fetchedState
  });

  export const AddSong = (projectName, songName) => ({
    type: ADD_SONG,
    payload: {projectName, songName}
  });

  // reducers.js
  export const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'INIT':
          break;
        case 'DATA_LOAD_COMPLETE':
        console.log("Data load has ", action.payload);
            return Object.assign({}, action.payload);
        case ADD_PROJECT:
          let newProject = {id: Date.now(), name: action.payload, songList: []};
          console.log("payload: ", newProject);
          api.create(newProject);
          return Object.assign({}, state, {
            projects:[
              {
                name: action.payload,
                songList: []
              },
            ...state.projects,
            ]
          });
      default:
        console.log("reducer action: ", action);
        return state;
    }
  };

  var iState = {
    projects: [
        {
            name: "Project1",
            songList: [
                { name: "song1" },
                { name: "song2" },
                { name: "song3" },
                { name: "song4" }
            ]
        },
        {
            name: "Project2",
            songList: [
                { name: "song10" },
                { name: "song20" },
                { name: "song30" },
                { name: "song40" }
            ]
        },
        {
            name: "Project3",
            songList: [
                { name: "song11" },
                { name: "song21" },
                { name: "song31" },
                { name: "song41" },
                { name: "song51" },
                { name: "song61" }
            ]
        },
        {
            name: "Project4",
            songList: [
                { name: "song10" },
                { name: "song20" }
            ]
        }
    ]
};

//   export const reducers = combineReducers({
//     reducer
//   });

  // store.js
  export function configureStore(initialState = {}) {
    const store = createStore(reducer, iState);
    return store;

  };

  export const store = configureStore();
