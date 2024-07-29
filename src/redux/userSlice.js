import {createSlice} from '@reduxjs/toolkit'


const initialState={
    user:{
        name: 'Le Meo',
        age: 3
    },
    length: 5
}

const userSlice=createSlice({
    name: 'user',
    initialState,
    reducers:{
        changeName(state, action){
            state.user.name = action.payload
        },
        changeAge(state, action){
            state.user.age = action.payload
        }
    }

})

export const {channgeName, channgeAge} = userSlice.actions
export default userSlice.reducer