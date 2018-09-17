import { _getUsers, _getUsersArray } from '../util/_DATA'

const initialState = {
    isLoggedIn:false,
    userName: '',
    usersList: _getUsersArray()
};

const reducer = (state=initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case 'USERS_LIST': 
            //newState.usersList = _getUsersArray();
            break;
            case 'USER_NAME': 
            newState.userName = action.value;
 
            break;
       
    }
    return newState;
};

export default reducer;