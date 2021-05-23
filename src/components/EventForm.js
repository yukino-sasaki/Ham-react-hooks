import React, { useState, useContext } from 'react'
import { CREATE_EVENT, DELETE_ALL_EVENT } from '../actions'
import AppContext from '../components/contexts/AppContext'


const EventForm = () => {
    //第一引数は＾reducer?第二引数は初期値、第三引数は初期化のコールバック
    //const [state, dispatch] = useReducer(reducer, [])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    //AppContext.Providerを使ってvalue={state,dispatch}を渡している
    const { state, dispatch } = useContext(AppContext)
    //イベントハンドラ（状態変化？）は関数らしい
    const addEvent = (e) => {
        e.preventDefault()
        //dispacth(action)  actionが必要 typeが必要
        /* action={
          type:'CREATE_EVENT'
          title,
          body
        } */

        //ここで作っているのがactionのtype?らしい引数で渡されているactionはここのこと
        dispatch({
            type: CREATE_EVENT,
            title,
            body,
        })

        console.log(state.length)
        console.log(typeof (Object.entries(state)))
        setTitle('')
        setBody('')
    }
    /*  console.log(state)
     console.log(state.length) */

    /*  useEffect(() => {
       console.log({ state })
     }, [state]) */

    const deleteAllEvents = (e) => {
        e.preventDefault()
        const result = window.confirm('全てのイベントを本当に削除しても良いですか？')
        if (result) dispatch({ type: DELETE_ALL_EVENT })
    }
    console.log(state)
    const unCreatable = title === '' || body === ''

    return (
        <>

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
                        value={body}
                        id="formEventBody"
                        onChange={e => setBody(e.target.value)} />
                </div>

                <button className="btn btn-primary"
                    onClick={addEvent}
                    disabled={unCreatable}
                >イベントを作成する</button>
                <button className="btn btn-danger"
                    disabled={state.events.length === 0}
                    onClick={deleteAllEvents}
                >全てのイベントを削除する</button>
            </form>
            <h4>イベント一覧</h4>
        </>
    )
}

export default EventForm