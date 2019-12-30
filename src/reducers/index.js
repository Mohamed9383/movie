import {ADD_ITEMS,INPUT_ITEMS,COMPLETE_ITEMS,DELETE_ITEMS} from '../actionstype'

const initialState = {
    minRate: 0,
    MoviesList: Film,
    rateTitle: "",
    isLoading: false
}
const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_ITEMS : 
            return {...state,MoviesList:state.MoviesList.concat(action.payload)}

        default:
            return state;
    }
}
export default rootReducer;