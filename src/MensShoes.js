import React from 'react';
import { MensShoes } from './data/shoes';
import ShoeList from './ShoeList';

function MensShoes() {
  return (
    <div>
      <h2>Mens Shoes Collection</h2>
      <p>Here you can find all types of mens shoes.</p>
      <ShoeList shoes={mensShoes} />
    </div>
  );
}

export default MensShoes;
