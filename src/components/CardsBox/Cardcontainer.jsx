import React from 'react'
import Card from'./Card'
const Cardcontainer = () => {
  return (
    <div className="container-fluid d-flex justify-content-center">
        <div className="row">
            <div className="col-md-4">
               <Card/>
            </div>
            <div className="col-md-4">
               <Card/>
            </div>
            <div className="col-md-4">
               <Card/>
            </div>
        </div>
    </div>
  )
}

export default Cardcontainer