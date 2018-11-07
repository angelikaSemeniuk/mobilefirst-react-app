const initialState = { currentDate: new Date(), selectedDay: false, episodes: [], error: "", recieveOriginalImage: false, originalImage: null };

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
                selectedDay: true
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
                selectedDay: false,
                episodes: [],
                error: "",
                recieveOriginalImage: false,
                originalImage: null

            })
        }
        case "RECIEVE_RESPONSE_BY_IMDB_ID": {
            return Object.assign({}, state, {
                recieveOriginalImage: true
            })
        }
        case "RECEIVE_EPISODES_ORIGINAL_IMAGE": {
            return Object.assign({}, state, {
                originalImage: action.value
            })
        }
        default:
            return state;
    }
}

export default reducer;