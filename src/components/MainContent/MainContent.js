import React from 'react';
import Sumary from '../Summary/Sumary';
import SearchBar from '../SearchBar/SearchBar';
import CardList from '../CardList/CardList';
import TipCard from '../TipCard/TipCard';
import { AppContext } from '../../contexts/appcontext';

const MainContent = ({ tips }) => {
  return (
    <AppContext.Consumer>
      {(value) => {
        return (
          <div className={`card-display ${value.darker}`}>
            <nav className="nav-bar">
              <Sumary />
              <SearchBar />
            </nav>
            {/* Lista de cards */}
            <CardList>
              {tips.map((dado) => (
                <TipCard tip={dado} key={dado.id} />
              ))}
            </CardList>
            {/* Fim da lista de cards */}
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

export default MainContent;
