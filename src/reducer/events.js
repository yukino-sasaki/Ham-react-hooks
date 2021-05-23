import { CREATE_EVENT, DELETE_ALL_EVENT, DELETE_EVENT } from '../actions'

//stateはアラタに作っている空の配列、actionはフォームに入力した値を引っ張ってきたpropsみたいなイメージだと思う
//typeはデフォルトで決まっているのか、それとも自分で設定しているのかは謎
const events = (state = [], action) => {
    switch (action.type) {
        case CREATE_EVENT:
            const event = { title: action.title, body: action.body, }
            const length = state.length
            //三項演算子の結果をidに代入
            const id = length === 0 ? 1 : state[length - 1].id + 1
            return [...state, { id: id, ...event }]//id : id よりidのみで書くことも可能

        case DELETE_EVENT:
            //わたってきたeventのidと削除ボタンを押したactionのidを見比べている。削除ボタンを押したものがaction.idに入っているのでevent.idと一致してしまうはずである。
            //そこで一致していないものをfilterで残しているので削除ボタンを押したもののみが消えるようになっている。
            return state.filter(event => event.id !== action.id)

        case DELETE_ALL_EVENT:

            return []
    }
    return null
}

export default events