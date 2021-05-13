

//stateはアラタに作っている空の配列、actionはフォームに入力した値を引っ張ってきたpropsみたいなイメージだと思う
//typeはデフォルトで決まっているのか、それとも自分で設定しているのかは謎
const events = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_EVENT':
            const event = { title: action.title, bodu: action.body, }
            const length = state.length
            //三項演算子の結果をidに代入
            const id = length === 0 ? 1 : state[length - 1].id + 1
            return [...state, { id: id, ...event }]//id : id よりidのみで書くことも可能

            return state
        case 'DELETE_EVENT':
            return state
        case 'DELETE_ALL_EVENT_EVENT':
            return []
    }
}

export default events