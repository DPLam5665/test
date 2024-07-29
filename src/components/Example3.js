import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { changeAVG, rechecked } from '../redux/studentSlice'
export default function Example3() {
    const dispatch = useDispatch()
    const student = useSelector((state) => state.student.student)
    const checked = useSelector((state) => state.student.checked)

  return (
    <div>
        <h1>Student's name: {student.name}</h1>
        <h1>Student's math: {student.math}</h1>
        <h1>Student's programming: {student.pro}</h1>
        <h1>Student's average: {student.avg}</h1>
        <h1>Checked: {checked?'true':'false'}</h1>
        <button onClick={()=>dispatch(changeAVG())}>Change Age</button>
        <button onClick={()=>dispatch(rechecked())}>Change Name</button>
    </div>
  )
}