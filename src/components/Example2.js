import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { channgeName, channgeAge } from '../redux/userSlice'
export default function Example2() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.user)
  return (
    <div>
        <h1>User's name: {user.name}</h1>
        <h1>USer's age: {user.age}</h1>
        <button onClick={()=>dispatch(changeAge(1))}>Change Age</button>
        <button onClick={()=>dispatch(changeName('Le Nai'))}>Change Name</button>
    </div>
  )
}