import {createSlice} from '@reduxjs/toolkit'


const initialState={
    student:{
        name: 'Le Meo',
        math: 3,
        pro: 9.5,
        avg: 0
    },
    checked: false,
}

const userSlice=createSlice({
    name: 'student',
    initialState,
    reducers:{
        changeAVG(state){
            state.student.avg = (state.student.math + state.student.pro)/2
        },
        rechecked(state){
            state.checked = !state.checked
        }
    }

})

export const {changeAVG, rechecked} = userSlice.actions
export default userSlice.reducer