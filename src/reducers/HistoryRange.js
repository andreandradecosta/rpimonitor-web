
const historyRange = (state = {}, action) => {
    switch (action.type) {
        case 'CHANGE_RANGE':
            return {...state, [action.date]:  action.value};
        default:
            return state;
    }
};

export default historyRange;
