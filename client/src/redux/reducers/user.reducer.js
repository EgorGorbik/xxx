export default (state = {data: null, errorName: null, errorPassword: null}, action) => {
    switch (action.type) {
        case 'SET_USER_SUCCESS':
            return {data: action.user};
        case 'SET_USER_FAILED':
            return {errorName: action.errorName, errorPassword: action.errorPassword};
        default:
            return state;
    }
};