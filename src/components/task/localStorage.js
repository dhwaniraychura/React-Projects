import Slice from './TaskSlice';
export function loadState(){
    try{
        const getState = localStorage.getItem("tasks");
        return getState ? JSON.parse(getState) : undefined;
    }
    catch(err){
        return undefined;
    }
}
export const saveState = (state) => {
    try{
         const save = JSON.stringify(state);
         localStorage.setItem("tasks",save);
    }
    catch(err){
        console.error(err);
    }
}