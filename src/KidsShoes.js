import React from 'react';
import { kidsShoes } from './data/shoes';
import ShoeList from './ShoeList';

function KidsShoes() {
  return (
    <div>
      <h2>Kids Shoes Collection</h2>
      <p>Here you can find all types of kids shoes.</p>
      <ShoeList shoes={kidsShoes} />
    </div>
  );
}

export default KidsShoes;
