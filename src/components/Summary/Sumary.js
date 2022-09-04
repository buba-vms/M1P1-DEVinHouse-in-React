import React from 'react';

import { AppContext } from '../../contexts/appcontext';
import SumaryCard from '../SummaryCard/SumaryCard';
const Sumary = () => {
  return (
    <AppContext.Consumer>
      {(value) => {
        const {
          totalValue,
          frontEndValue,
          backEndValue,
          fullStackValue,
          comportamentalValue,
        } = value;

        return (
          <div className="estatisticas">
            <SumaryCard name="Total" valueProp={totalValue} />
            <SumaryCard name="FrontEnd" valueProp={frontEndValue} />
            <SumaryCard name="BackEnd" valueProp={backEndValue} />
            <SumaryCard name="FullStack" valueProp={fullStackValue} />
            <SumaryCard name="SoftSkill" valueProp={comportamentalValue} />
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

export default Sumary;
