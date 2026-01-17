import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from '../components/task/TaskSlice'
import { loadState, saveState } from "../components/task/localStorage";
const preloadedState = loadState();
const store = configureStore({
    reducer:{
        tasks : tasksReducer
    },
     preloadedState,
})

store.subscribe(() =>{
    saveState({
         tasks: store.getState().tasks
    });
})
export default store;