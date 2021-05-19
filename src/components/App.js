import React, { useReducer, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducer'//index.jsは略せる
import './App.css';
import Events from './Events'
import Eventform from './EventForm'
//どこでreducerの内容を反映させているのか
const App = () => {
  //第一引数は＾reducer?第二引数は初期値、第三引数は初期化のコールバック
  const [state, dispatch] = useReducer(reducer, [])


  //イベントハンドラ（状態変化？）は関数らしい

  //ここで作っているのがactionのtype?らしい引数で渡されているactionはここのこと
  /* dispatch({
    type: 'CREATE_EVENT',
    title,
    body,
  })
*/


  return (
    <div className="container-fluid">
      <Eventform state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />

    </div>
  )
}

export default App;
