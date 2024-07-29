import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    students:[
        {id:1,name:'Le Meo',checked:false},
        {id:2,name:'Le Nai',checked:false},
        {id:3,name:'Le Bo',checked:true},
        {id:4,name:'Le Tho',checked:true},
        {id:5,name:'Le Chim',checked:false}
    ],
    checkAll: false
}
const listslice=createSlice({
    name:'students',
    initialState,
    reducers:{
        addStudent(state,action){
            state.students=[...state.students,{id:6,name:action.payload, checked:true}]
        },
        deleteStudent(state,action){
            state.students=state.students.filter(item=>item.id !==action.payload)
        }
    }
})

export const{addStudent,deleteStudent} = listslice.actions
export default listslice.reducer