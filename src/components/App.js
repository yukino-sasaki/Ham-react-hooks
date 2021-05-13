import React, { useReducer, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducer'
import './App.css';

const App = () => {
  //第一引数は＾reducer?第二引数は初期値、第三引数は初期化のコールバック
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  //イベントハンドラ（状態変化？）は関数らしい
  const addEvent = (e) => {
    e.preventDefault()
    //dispacth(action)  actionが必要 typeが必要
    /* action={
      type:'CREATE_EVENT'
      title,
      body
    } */
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    })

    console.log({ state })

    setTitle('')
    setBody('')
  }
  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control"
            id="formEventTitle"
            value={title}
            onChange={e => setTitle(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディ</label>
          <textarea className="form-control"
            id="formEventBody"
            onChange={e => setBody(e.target.value)} />
        </div>

        <button className="btn btn-primary"
          onClick={addEvent}
        >イベントを作成する</button>
        <button className="btn btn-danger">全てのイベントを削除する</button>
      </form>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディ</th>
            <th></th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default App;
