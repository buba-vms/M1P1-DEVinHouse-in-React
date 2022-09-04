import React from 'react';
import { FaBook } from 'react-icons/fa';

const FormTitle = () => {
  return (
    <div className="title">
      <i>
        <FaBook />
      </i>
      <hgroup>
        <h3>
          DEVin<span>Knowledge</span>
        </h3>
        <h5>Learn, Code and Save</h5>
      </hgroup>
    </div>
  );
};

export default FormTitle;
