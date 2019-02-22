import React from 'react'


export default function(props) {
  const { shoe } = props
  return (
    <div style={{"display": "flex"}} >
      <figure>
        <img src={shoe.img_url} alt={shoe.name} style={{"width": 200}} />
      </figure>
      <div>
        <h2>{shoe.name}</h2>
        <h3>{shoe.brand}</h3>
        <h5>${shoe.purchase_cost}</h5>
      </div>
      
    
    </div>
  )
}