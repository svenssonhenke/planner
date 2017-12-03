import {  
    applyMiddleware,
    combineReducers,
    createStore,
  } from 'redux';
  
  //actions.js
  export const initState = state => ({  
    type: 'INIT',
    state
  });
  
  // reducers.js
  export const reducer = (state = {}, action) => {  
    switch (action.type) {
        case 'INIT':
        break;
      default:
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