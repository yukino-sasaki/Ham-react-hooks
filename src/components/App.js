import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducer'//index.jsは略せる
import './App.css';
import Events from './Events'
import Eventform from './EventForm'
import AppContext from '../components/contexts/AppContext'
//どこでreducerの内容を反映させているのか
const App = () => {
  const initialState = {
    events: [],
    operationLogs: []
  }
  //第一引数は＾reducer?はstateを変更させるための関数。第二引数は初期値、第三引数は初期化のコールバック
  const [state, dispatch] = useReducer(reducer, initialState)


  //イベントハンドラ（状態変化？）は関数らしい

  //ここで作っているのがactionのtype?らしい引数で渡されているactionはここのこと
  /* dispatch({
    type: 'CREATE_EVENT',
    title,
    body,
  })
*/


  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <Eventform />
        <Events />

      </div>
    </AppContext.Provider>
  )
}

export default App;
