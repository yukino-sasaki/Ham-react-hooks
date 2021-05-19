import React from 'react'
import { DELETE_EVENT } from '../actions'

const Event = ({ dispatch, event }) => {
    const id = event.id
    //dispatchの情報が変化するため.どれを削除するか↓id
    const handleClickDeleteButton = () => {
        const result = window.confirm(`イベント(id=${id}を本当に削除しても良いですか？)`)

        if (result) dispatch({ type: DELETE_EVENT, id })
    }
    //もうすでにEventコンポーネントにuniqueなキーが設定されているのでtrのキーは削除
    return (
        <tr>
            <td>{event.id}</td>
            <td>{event.title}</td>
            <td>{event.body}</td>
            <td><button type="button"
                className="btn btn-danger"
                onClick={handleClickDeleteButton}>削除</button> </td>
        </tr>
    )

}

export default Event

/* {
    state.map((event, index) => {
        const handleClickDeleteButton = () => {
        }
    })
} */