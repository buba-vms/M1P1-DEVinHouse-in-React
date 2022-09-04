import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { AppContext } from '../../contexts/appcontext';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  return (
    <AppContext.Consumer>
      {(value) => {
        const { dispatch } = value;

        const handleSearch = () => {
          dispatch({
            type: 'FILTRAR_TIPS',
            payload: { search },
          });
        };
        return (
          <div className="pesquisa">
            <input
              type="search"
              id="barra-pesquisa"
              placeholder="Pesquisar..."
              className={value.dark}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <i>
              <AiOutlineClose
                className="limpar-pesquisa"
                onClick={() => {
                  dispatch({ type: 'IGUALAR_TIPS' });
                  setSearch('');
                }}
              />
            </i>
            <i>
              <AiOutlineSearch className="procurar" onClick={handleSearch} />
            </i>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

export default SearchBar;
