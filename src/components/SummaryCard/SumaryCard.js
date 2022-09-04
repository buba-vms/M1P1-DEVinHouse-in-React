import React from 'react';
import { AppContext } from '../../contexts/appcontext';

const SumaryCard = ({ name, valueProp }) => {
  return (
    <AppContext.Consumer>
      {(value) => {
        return (
          <div className={`estatistica ${value.dark}`}>
            <h4>{name}</h4>
            <h3 className="total">{valueProp}</h3>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

export default SumaryCard;
