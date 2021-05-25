import {
    DELETE_ALL_OPERATION_LOGS,
    ADD_OPERATION_LOG
} from '../actions/index'

//これがreducerらしい
const operationLogs = (state = [], action) => {
    console.log(action.type)
    switch (action.type) {
        case ADD_OPERATION_LOG:
            const operationLog = {
                description: action.description,
                operatedAt: action.operatedAt
            }
            return [operationLog, ...state]
        case DELETE_ALL_OPERATION_LOGS:
            return []
        default:
            return state
    }
}

export default operationLogs