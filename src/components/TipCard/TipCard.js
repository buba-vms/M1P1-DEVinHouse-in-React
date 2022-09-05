import React from 'react';
import { BsFillCameraVideoFill, BsTrash } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { AppContext } from '../../contexts/appcontext';

const TipCard = ({ tip }) => {
  const { titulo, skill, categoria, descricao, video_url, id } = tip;

  return (
    <AppContext.Consumer>
      {(value) => {
        const { dispatch } = value;

        const handleRemove = () => {
          if (window.confirm(`deseja deletar o card ${titulo}?`)) {
            dispatch({
              type: 'REMOVER_TIP',
              payload: { id },
            });

            dispatch({
              type: 'IGUALAR_TIPS',
            });

            dispatch({
              type: 'DESLIGAR_EDIT_MODE',
            });
          }
        };
        const handleEdit = () => {
          dispatch({
            type: 'EDITAR_TIP',
            payload: { idEdit: tip },
          });
        };
        return (
          <div className={`card ${value.dark}`}>
            <h4>{titulo}</h4>
            <div className="card-data">
              <h5 className="skill-card">
                <b>Linguagem/Skill:</b> {skill}
              </h5>
              <h5 className="category-card">
                <b>Categoria:</b> {categoria}
              </h5>
              <p>{descricao}</p>
            </div>
            <div className="card-buttons">
              <i onClick={handleRemove}>
                <BsTrash className="card-delete" />
              </i>
              <i onClick={handleEdit}>
                <FiEdit className="card-edit" />
              </i>

              {video_url && (
                <a href={video_url}>
                  <i>
                    <BsFillCameraVideoFill className="card-video" />
                  </i>
                </a>
              )}
            </div>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

export default TipCard;
