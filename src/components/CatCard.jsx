import React from 'react';

const CatCard = ({ cat }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={cat.url} alt="cat" className="w-full h-auto" />
    </div>
  );
};

export default CatCard;

