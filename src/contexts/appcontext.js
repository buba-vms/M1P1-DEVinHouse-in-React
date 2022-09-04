import React, { createContext, useEffect, useState } from 'react';
import { useTipsReducer } from '../reducers/app-reducer';

const AppContext = createContext();
if (!localStorage.getItem('dark-mode')) {
  localStorage.setItem('dark-mode', JSON.stringify(false));
}

const AppProvider = ({ children }) => {
  const [appMode, setAppMode] = useState(
    JSON.parse(localStorage.getItem('dark-mode'))
  );
  const [dark, setDark] = useState('dark');
  const [darker, setDarker] = useState('darker');
  const [darkerPurple, setDarkerPurple] = useState('darkerPurple');
  const [state, dispatch] = useTipsReducer();
  const { tips, filterdTips, isEditMode, tipToEdit } = state;
  const [newTip, setNewTip] = useState({
    titulo: '',
    skill: '',
    categoria: '',
    descricao: '',
    video_url: '',
  });

  const [frontEndValue, setFrontEndValue] = useState(0);
  const [backEndValue, setBackEndValue] = useState(0);
  const [fullStackValue, setFullStackEndValue] = useState(0);
  const [comportamentalValue, setComportamentalValue] = useState(0);
  const [totalValue, setTotalValue] = useState(
    frontEndValue + backEndValue + fullStackValue + comportamentalValue
  );

  useEffect(() => {
    const handleContadores = () => {
      setFrontEndValue(0);
      setBackEndValue(0);
      setFullStackEndValue(0);
      setComportamentalValue(0);
      setTotalValue(0);

      tips.forEach((tip) => {
        if (tip.categoria === 'front-end') {
          setFrontEndValue((prevValue) => prevValue + 1);
          setTotalValue((prevValue) => prevValue + 1);
        } else if (tip.categoria === 'back-end') {
          setBackEndValue((prevValue) => prevValue + 1);
          setTotalValue((prevValue) => prevValue + 1);
        } else if (tip.categoria === 'fullstack') {
          setFullStackEndValue((prevValue) => prevValue + 1);
          setTotalValue((prevValue) => prevValue + 1);
        } else if (tip.categoria === 'comportamental') {
          setComportamentalValue((prevValue) => prevValue + 1);
          setTotalValue((prevValue) => prevValue + 1);
        }
      });
    };
    handleContadores();
    localStorage.setItem('tips', JSON.stringify(tips));
    dispatch({ type: 'IGUALAR_TIPS' });
  }, [tips, dispatch]);

  const handleNewTip = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setNewTip({ ...newTip, [name]: value });
  };

  const handleTips = (e) => {
    e.preventDefault();

    // const tip = { ...newTip, id: new Date().getTime().toString() };
    // setTips([...tips, tip]);
    if (isEditMode) {
      dispatch({
        type: 'EDITAR_TIPS',
        payload: { newEditedTip: newTip },
      });
    } else {
      dispatch({
        type: 'ADICIONAR_TIP',
        payload: {
          newTip,
        },
      });
    }

    dispatch({
      type: 'IGUALAR_TIPS',
    });

    setNewTip({
      titulo: '',
      skill: '',
      categoria: '',
      descricao: '',
      video_url: '',
    });
  };

  useEffect(() => {
    if (appMode) {
      setDark('dark');
      setDarker('darker');
      setDarkerPurple('darkerPurple');
      document.body.style.background = '#131217';
    } else {
      setDark('');
      setDarker('');
      setDarkerPurple('');
      document.body.style.background = null;
    }
    localStorage.setItem('dark-mode', JSON.stringify(appMode));
  }, [appMode]);

  useEffect(() => {
    setNewTip(tipToEdit);
  }, [isEditMode, tipToEdit]);

  const toggleMode = () => {
    setAppMode((prevValue) => !prevValue);
  };

  return (
    <AppContext.Provider
      value={{
        appMode,
        setAppMode,
        dark,
        darker,
        darkerPurple,
        toggleMode,
        tips,
        newTip,
        setNewTip,
        handleNewTip,
        handleTips,
        filterdTips,
        isEditMode,
        tipToEdit,
        dispatch,
        frontEndValue,
        backEndValue,
        fullStackValue,
        comportamentalValue,
        totalValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
export { AppContext };
