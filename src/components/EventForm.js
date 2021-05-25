import React, { useState, useContext } from 'react'
import {
    CREATE_EVENT,
    ADD_OPERATION_LOG,
    DELETE_ALL_OPERATION_LOGS,
    DELETE_ALL_EVENT
} from '../actions'
import AppContext from '../components/contexts/AppContext'
import { timeCurrentIso8601 } from '../utils'

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

        dispatch({
            type: ADD_OPERATION_LOG,
            description: 'イベントを作成しました',
            operatedAt: timeCurrentIso8601()
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
        if (result) {
            dispatch({ type: DELETE_ALL_EVENT })
            dispatch({
                //logを追加するtypeがaddであってそれは内容に寄らない
                type: ADD_OPERATION_LOG,
                description: '全てのイベントを削除しました',
                operatedAt: timeCurrentIso8601()
            })
        }
    }
    console.log(state)
    const unCreatable = title === '' || body === ''

    //イベントハンドラなのでイベントが引数としてわたってくる
    const deleteAllOperationLogs = e => {
        //ボタンをクリックするとページのリロードが走ってしまうらしい
        e.preventDefault()
        const result = window.comfirm('全ての操作ログを保温等に削除しても良いですか？')
        if (result) {
            dispatch({ type: DELETE_ALL_OPERATION_LOGS })
        }
    }
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
                <button className="btn btn-danger"
                    disabled={state.operationLogs.length === 0}
                    onClick={deleteAllOperationLogs}
                >全ての操作ログを削除する</button>
            </form>
            <h4>イベント一覧</h4>
        </>
    )
}

export default EventForm