// import axios from the node modules
import axios from "axios";

// add data to api and to the state 

// API CAll - Add Data
const addData = (data, id) => (dispatch) => {
    const data = { task, id }
    return axios.post("http://localhost:300/list", data).then(
        (res) => {
            return dispatch({
                type: 'ADD_DATA',
                payload: { data, id }
            })
        })
};

// Add to the global state in reducer

import { combineReducers } from 'redux';

const tasksReducer = (state = [], action) => {
    switch(action.type){
        case "ADD_DATA":
            return [...state, action.payload] // data and id added to the state
    }
}

////////////////////////////////////////////////////////////////////////////////////////////

// Update data to the State and API

// API CALL - Update Data 
const updateData = (index, data) => (dispatch) => {
    const data = { data }
    return axios.put(`http://localhost:3000/list/${index}`, data).then(
        (res) => {
            return dispatch({
                type: 'UPDATE_DATA',
                payload: { index, data }
            })
        }
    )
}

// Update to the global state in reducer 

import { combineReducers } from 'redux';

const tasksReducer = (state = [], action) => {
    switch(action.type){
        case "UPDATE_DATA":
           const { index, data } = action.payload;
           return state.map((data) => {
               if(data.id === index){
                   data.data = data
               }
           })
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////

// Read state from API and the state 

// API CALL - Read Data 

const getData = () => (dispatch) => {
    return axios.get("http://localhost:3000/list")
        .then(({ data }) => {

            return dispatch({
                type: "GET_DATA",
                payload: data
            })
        })
}


// Update state so can read data 

import { combineReducers } from 'redux';

const tasksReducer = (state = [], action) => {
    switch(action.type){
        case "GET_DATA":
          return [...state, ...action.payload]
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////

// Search specific data from the api and updating the state, get method 

// Search data with search criteria from the api 

const searchData = (id) => (dispatch) => {
    axios.get('http://localhost:3000/list', {
        params: {
            id
        }
    })
    .then(({ data }) => {

        return dispatch({
            type: "SEARCH_DATA",
            payload: data
        })
    })
}

// Update state with search data from get request 

import { combineReducers } from 'redux';

const tasksReducer = (state = [], action) => {
    switch(action.type){
        case "SEARCH_DATA":
          return [...state, ...action.payload]
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////
// Search specific data from the api and updating the state, post method 

// Search data with search criteria from the api 

const searchData = (id) => (dispatch) => {
    axios.post('http://localhost:3000/list', {
        params: {
            id
        }
    })
    .then(({ data }) => {

        return dispatch({
            type: "SEARCH_DATA",
            payload: data
        })
    })
}

// Update state with search data from post request 

import { combineReducers } from 'redux';

const tasksReducer = (state = [], action) => {
    switch(action.type){
        case "SEARCH_DATA":
          return [...state, ...action.payload]
    }
}

//////////////////////////////////////////////////////////////////////////////////////

// Delete Data from the API and the STATE 

// Delete data from the API 

const deleteTask = (id) => (dispatch) => {

    return axios.delete(`http://localhost:3000/list/${id}`
)
.then((res)=> {
    return dispatch({
        type: 'DELETE_TASK',
        payload: id
    })
})
};

// Update state with deleted data removed 

import { combineReducers } from 'redux';

const tasksReducer = (state = [], action) => {
   switch(action.type){
       case "DELETE_DATA":
           return state.filter((data) => data.id !== action.payload)
   }
}

