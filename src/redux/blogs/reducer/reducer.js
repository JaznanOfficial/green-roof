import { BLOG_FETCH } from "../actionTypes/actionTypes";

const reducer = (state, action) => {
    switch (action.type) {
        case BLOG_FETCH:
            return {
                ...state,
            };

        default:
            return state;
    }
};

export default reducer;
