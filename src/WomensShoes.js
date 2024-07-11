import React from 'react';
import { WomensShoes } from './data/shoes';
import ShoeList from './ShoeList';

function WomensShoes() {
  return (
    <div>
      <h2>Womens Shoes Collection</h2>
      <p>Here you can find all types of womens shoes.</p>
      <ShoeList shoes={womensShoes} />
    </div>
  );
}

export default WomensShoes;
