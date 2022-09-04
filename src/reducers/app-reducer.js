import { useReducer } from 'react';

let listaDoStorage = [];
if (localStorage.getItem('tips')) {
  listaDoStorage = JSON.parse(localStorage.getItem('tips'));
}

const initialState = {
  tips: listaDoStorage,
  filterdTips: [],
  isEditMode: false,
  tipToEdit: {},
};

const reducer = (state, action) => {
  const { tips, isEditMode, tipToEdit } = state;

  const { type, payload } = action;

  switch (type) {
    case 'ADICIONAR_TIP':
      const { newTip } = payload;

      if (newTip.id) {
        return {
          ...state,
          tips: [...tips, { ...newTip, id: new Date().getTime().toString() }],
        };
      }
      return {
        ...state,
        tips: [...tips, { ...newTip, id: new Date().getTime().toString() }],
      };

    case 'IGUALAR_TIPS':
      return {
        ...state,
        filterdTips: tips,
      };

    case 'REMOVER_TIP':
      const { id } = payload;
      console.log(tips);
      return {
        ...state,
        tips: tips.filter((tip) => {
          return tip.id !== id;
        }),
      };

    case 'FILTRAR_TIPS':
      const { search } = payload;
      return {
        ...state,
        filterdTips: tips.filter((tip) => {
          return tip.titulo.toLowerCase().includes(search);
        }),
      };
    case 'EDITAR_TIP':
      const { idEdit } = payload;

      if (!isEditMode) {
        return {
          ...state,
          isEditMode: true,
          tipToEdit: idEdit,
        };
      } else if (isEditMode) {
        return {
          ...state,
          isEditMode: false,
          tipToEdit: {
            titulo: '',
            categoria: '',
            skill: '',
            descricao: '',
            video_url: '',
          },
        };
      }
      break;
    case 'EDITAR_TIPS':
      const { newEditedTip } = payload;
      const indexOfTip = tips.indexOf(tipToEdit);
      const editedTips = tips;
      editedTips[indexOfTip] = newEditedTip;
      console.log(indexOfTip);
      return {
        ...state,
        tips: editedTips,
        tipToEdit: {
          titulo: '',
          categoria: '',
          skill: '',
          descricao: '',
          video_url: '',
        },
        isEditMode: false,
      };
    case 'DESLIGAR_EDIT_MODE':
      return {
        ...state,
        isEditMode: false,
        tipToEdit: {
          titulo: '',
          categoria: '',
          skill: '',
          descricao: '',
          video_url: '',
        },
      };

    default:
      return state;
  }
};

export const useTipsReducer = () => {
  return useReducer(reducer, initialState);
};
