import React from 'react'
import './card.css'
const Card = () => {
  return (
   
      <div className="card text-center">
         <div class="d-flex justify-content-center align-items-center">
    <img src="https://images.unsplash.com/photo-1529590003495-b2646e2718bf?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF5dXJ2ZWRhJTIwYm9va3xlbnwwfHwwfHx8MA%3D%3D" class="card-img-top" alt="Card Image"/>
  </div>
        <div className="card-body text-dark">
            <h4 className='card-title'>Card Title</h4>
            <a href='#' className='btn btn-outline-success'>Review</a>
        </div>
      </div>
   
  )
}

export default Card
