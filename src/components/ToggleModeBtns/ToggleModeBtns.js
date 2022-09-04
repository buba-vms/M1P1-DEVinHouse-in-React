import React from 'react';
import { AppContext } from '../../contexts/appcontext';
import { BsFillSunFill } from 'react-icons/bs';
import { IoIosMoon } from 'react-icons/io';
const ToggleModeBtns = () => {
  return (
    <AppContext.Consumer>
      {(value) => {
        return (
          <div className="toggle-dark-mode" onClick={value.toggleMode}>
            {value.appMode ? (
              <>
                <BsFillSunFill /> <IoIosMoon style={{ color: '#90c0df' }} />
              </>
            ) : (
              <>
                <BsFillSunFill style={{ color: 'yellow' }} /> <IoIosMoon />
              </>
            )}
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

export default ToggleModeBtns;
