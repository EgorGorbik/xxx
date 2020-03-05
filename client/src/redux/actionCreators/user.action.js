export const setUserSuccess = (user) => ({type: 'SET_USER_SUCCESS', user});
export const setUserFailed = (error) => {
    if(error === 'Wrong username') {
        return ({type: 'SET_USER_FAILED', errorName: 'Нет пользователя с таким именем'})
    }
    if(error === 'Wrong password') {
        return ({type: 'SET_USER_FAILED', errorPassword: 'Неправильный пароль'})
    }
};