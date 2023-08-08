import React from 'react';
import Contador from './Contador';
import Cabecalho from './Cabecalho';
import './App.css';
import { createStore } from 'redux'
import contadorReducer from './reducer/contadorReducer';
import { Provider } from 'react-redux';



function App() {

  // redux com react usa context API por baixo dos panos
  const store = createStore(contadorReducer)

  return (
    <div className="App">
    {/* preciso passsar minha store como constexto */}
      <Provider store={store}>
        <Cabecalho> </Cabecalho>
        <Contador> </Contador>
      </Provider>
    </div>
  );
}

export default App;
