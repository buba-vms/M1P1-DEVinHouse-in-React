import React from 'react';

const CardList = ({ children }) => {
  return (
    <div className="cards-center">
      {/* Card */}
      {children}
      {/* fim da card */}
    </div>
  );
};

export default CardList;
