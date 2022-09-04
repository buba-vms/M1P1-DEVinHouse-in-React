import React from 'react';
import { AppContext } from '../../contexts/appcontext';
import FormTitle from '../FormTitle/FormTitle';
import ToggleModeBtns from '../ToggleModeBtns/ToggleModeBtns';
const SidebarForm = ({ newTip, handleNewTip, handleTips, setNewTip }) => {
  return (
    <AppContext.Consumer>
      {(value) => {
        const { isEditMode, dispatch } = value;

        return (
          <div className={`formulario ${value.darkerPurple}`}>
            <FormTitle />
            <ToggleModeBtns />
            {isEditMode && (
              <div className="edit-mode-on">
                <h5>modo edição</h5>
              </div>
            )}
            {/* formulário inputs */}
            <form id="formulario" onSubmit={handleTips}>
              <div className="input-style">
                <label htmlFor="titulo">Título</label>
                <input
                  type="text"
                  id="titulo"
                  minLength="8"
                  maxLength="64"
                  placeholder="ex: Flexbox vs Grid"
                  required
                  name="titulo"
                  value={newTip.titulo || ''}
                  onChange={handleNewTip}
                  className={value.dark}
                />
              </div>

              <div className="input-style">
                <label htmlFor="skill">Skill</label>
                <input
                  type="text"
                  id="skill"
                  minLength="4"
                  maxLength="16"
                  placeholder="ex: CSS"
                  required
                  name="skill"
                  value={newTip.skill || ''}
                  onChange={handleNewTip}
                  className={value.dark}
                />
              </div>

              <div className="input-style">
                <label htmlFor="categoria">Categoria</label>
                <select
                  name="categoria"
                  id="categoria"
                  required
                  value={newTip.categoria || ''}
                  onChange={handleNewTip}
                  className={value.dark}
                >
                  <option placeholder="selecionar"></option>
                  <option value="front-end">Front End</option>
                  <option value="back-end">Back End</option>
                  <option value="fullstack">Fullstack</option>
                  <option value="comportamental">Comportamental/Soft</option>
                </select>
              </div>

              <div className="input-style">
                <label htmlFor="descricao">Descrição</label>
                <textarea
                  name="descricao"
                  id="descricao"
                  cols="20"
                  rows="8"
                  minLength="32"
                  maxLength="512"
                  placeholder="Descrição sobre o tema"
                  required
                  value={newTip.descricao || ''}
                  onChange={handleNewTip}
                  className={value.dark}
                ></textarea>
              </div>

              <div className="input-style">
                <label htmlFor="video-url">
                  <span>
                    <i className="fa-brands fa-youtube"></i>
                  </span>{' '}
                  Vídeo do Youtube
                </label>
                <input
                  name="video_url"
                  type="url"
                  id="video-url"
                  placeholder="https://www.youtube.com"
                  value={newTip.video_url || ''}
                  onChange={handleNewTip}
                  className={value.dark}
                />
              </div>
              {/* Fim do formulário */}
              {/* Form Buttons */}
              <div className="action-btns default-mode">
                <button
                  className="btn btn-limpar"
                  onClick={(e) => {
                    e.preventDefault();
                    setNewTip({
                      ...newTip,
                      titulo: '',
                      skill: '',
                      categoria: '',
                      descricao: '',
                      video_url: '',
                    });
                    dispatch({
                      type: 'DESLIGAR_EDIT_MODE',
                    });
                  }}
                >
                  Limpar
                </button>
                {isEditMode ? (
                  <button
                    type="submit"
                    className="btn btn-salvar"
                    style={{ background: 'green' }}
                  >
                    Editar
                  </button>
                ) : (
                  <button type="submit" className="btn btn-salvar">
                    Salvar
                  </button>
                )}
              </div>
            </form>

            {/* Fim do form button */}
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

export default SidebarForm;
