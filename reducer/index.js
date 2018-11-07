const initialState = { currentDate: new Date(), onClickDay: false, episodes: [], error: "" };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ONCHANGE_ON_CALENDAR": {
            console.error("action-ONCHANGE_ON_CALENDAR");
            return Object.assign({}, state, {
                currentDate: action.value
            })
        }
        case "ONCLICK_ON_CALENDAR_ITEM": {
            console.error("action-ONCLICK_ON_CALENDAR_ITEM");
            return Object.assign({}, state, {
                onClickDay: true
            })
        }
        case "RECEIVE_EPISODES": {
            return Object.assign({}, state, {
                episodes: action.value
            })
        }
        case "CATCH_ERROR": {
            return Object.assign({}, state, {
                error: action.value
            })
        }
        case "HANDLE_ACTION_FOR_DISPLAY_CONTENT": {
            return Object.assign({}, state, {
                currentDate: new Date(),
                onClickDay: false,
                episodes: [],
                error: ""
            })
        }
        default:
            return state;
    }
}

export default reducer;