import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const state1 = useSelector(state => state.fname)
    const state2 = useSelector(state => state.lName)
    const state3 = useSelector(state => state.email)
    const state4 = useSelector(state => state.pass) 
    return (
        <div className="homepage-data">
          <h2>First name : {state1} </h2>
          <h2> Last name:{state2}</h2>
          <h2> Email: {state3}</h2>
          <h2> Password:{state4}</h2>

        </div>
    )
}

export default Home
