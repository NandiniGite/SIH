import React from 'react'
import Cardcontainer from '../CardsBox/Cardcontainer'
import Search from "../Search"
const Content = () => {
  return (
    <div>
      <h1 className='mt-4 m-auto mb-5'>Books</h1>
      <hr className="shadow" />
      <Search/>
      <Cardcontainer/>
    </div>
  )
}

export default Content
