import { combineReducers } from 'redux';

const dataReducer = (state = [], action) => {

    switch(action.type){
         case "GET_DATA":

         state = [];
            console.log("State: ", action.payload)
           
            return [...state, ...action.payload]
    }

    
    return state;
    
};



const reducers = combineReducers({
    data: dataReducer
});

export default reducers;