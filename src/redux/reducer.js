import { TOKEN } from './type';


const initialState = {
    token: ""
};
const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOKEN:
            return {
                ...state,
                token: action.payload
            };
        default:
            return state;
    }
}
export default MainReducer;