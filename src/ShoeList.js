import React from 'react';
import './ShoeList.css';

function ShoeList({ shoes }) {
  return (
    <div className="shoe-list">
      {shoes.map(shoe => (
        <div key={shoe.id} className="shoe-item">
          <img src={shoe.img} alt={shoe.name} className="shoe-image" />
          <h3>{shoe.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default ShoeList;
