

export default function historyRange(state = {}, action) {
    switch (action.type) {
        case 'CHANGE_RANGE':
            let newState = {...state};
            newState[action.date] = action.value;
            return newState;
        default:
            return state;
    }
}
