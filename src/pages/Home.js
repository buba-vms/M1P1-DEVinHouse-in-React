import React from 'react';
import './Home.css';
import SidebarForm from '../components/SidebarForm/SidebarForm';
import MainContent from '../components/MainContent/MainContent';

import { AppContext } from '../contexts/appcontext';

const Home = () => {
  // const [tips, setTips] = useState([]);

  return (
    <AppContext.Consumer>
      {(value) => {
        const { filterdTips, newTip, setNewTip, handleNewTip, handleTips } =
          value;

        return (
          <main>
            <div className="main-center">
              {/*Formulario div  */}
              <SidebarForm
                newTip={newTip}
                handleNewTip={handleNewTip}
                handleTips={handleTips}
                setNewTip={setNewTip}
              />
              {/* Lista de cartas */}
              <MainContent tips={filterdTips} />
            </div>
          </main>
        );
      }}
    </AppContext.Consumer>
  );
};

export default Home;
