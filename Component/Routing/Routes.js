import React from 'react'
import SingleCard from '../ReusableCmp/SingleCard'
import { Routes,Route } from 'react-router-dom'

const Routes = () => {
  return (
    <div>
        <Routes>
            <Route path='/singleCard' element={<SingleCard/>}></Route>
        </Routes>
    </div>
  )
}

export default Routes