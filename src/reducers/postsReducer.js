const defaultState = [];

const postsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "test":
            return [...state, 1];
        default:
            return state;
    }
}

export {postsReducer};